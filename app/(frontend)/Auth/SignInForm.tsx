"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signInAction, type SignInState } from "./signInAction";

const initialState: SignInState = null;

export function SignInForm() {
  const [state, formAction, pending] = useActionState(
    signInAction,
    initialState,
  );

  return (
    <>
      <form action={formAction}>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="submit" disabled={pending}>
          {pending ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <p className="text-red-500 min-h-1 text-md">{state?.error}</p>
      <Link href="/">lander</Link>
    </>
  );
}
