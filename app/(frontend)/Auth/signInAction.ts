"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type SignInState = {
  error?: string;
} | null;

export async function signInAction(
  _previousState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  try {
    formData.set("redirectTo", "/home");
    await signIn("credentials", formData);
    return null;
  } catch (error) {
    if (error instanceof AuthError) {
      console.error("Sign-in failed", error);
      return { error: "Sign in failed. Wrong credentials." };
    }

    throw error;
  }
}
