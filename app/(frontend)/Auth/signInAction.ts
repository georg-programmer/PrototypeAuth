// Server Action für den Login-Vorgang
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// Rückgabetyp: entweder null (Erfolg) oder ein Error-Objekt
export type SignInState = {
  error?: string;
} | null;

// Wird vom Login-Formular aufgerufen (useActionState)
export async function signInAction(
  _previousState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  try {
    // Nach erfolgreichem Login zur Home-Seite weiterleiten
    formData.set("redirectTo", "/home");
    await signIn("credentials", formData);
    return null;
  } catch (error) {
    // AuthError abfangen und benutzerfreundliche Fehlermeldung zurückgeben
    if (error instanceof AuthError) {
      console.error("Sign-in failed", error);
      return { error: "Sign in failed. Wrong credentials." };
    }

    // Andere Fehler (z.B. Redirect) weiterwerfen
    throw error;
  }
}
