import { handlers } from "@/auth";

// NextAuth API-Route: leitet GET & POST an die NextAuth-Handler weiter
export const { GET, POST } = handlers;
