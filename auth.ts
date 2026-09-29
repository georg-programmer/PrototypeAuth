import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signInSchema } from "./lib/zod"

// NextAuth-Konfiguration: exportiert Handler, Auth-Helfer, SignIn & SignOut
export const { handlers, auth, signIn, signOut } = NextAuth({
  // JWT statt Datenbank-Sessions verwenden
  session: {
    strategy: "jwt",
  },
  callbacks:{
    // Zugriff nur erlauben wenn eine gültige Session existiert
    authorized: async ({ auth }) => { return !!auth }
  },

  providers: [
    // Credentials-Provider: Login mit Email & Passwort
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      // authorize wird bei jedem Login-Versuch aufgerufen
      async authorize(credentials) {
        // Abbruch wenn Email oder Passwort fehlen
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Eingaben mit Zod validieren
        const {email, password} = await signInSchema.parseAsync(credentials)

        // User anhand der Email in der DB suchen
        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
        });

        if (!user) {
          return null;
        }

        // Eingegebenes Passwort mit dem gespeicherten Hash vergleichen
        const passwordMatch = await bcrypt.compare(
          password as string,
          user.password
        );

        if (!passwordMatch) {
          return null;
        }

        // User-Daten zurückgeben — werden im JWT gespeichert
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],

  // Eigene Login-Seite statt der NextAuth-Standardseite
  pages: {
    signIn: "/login",
  },
});

