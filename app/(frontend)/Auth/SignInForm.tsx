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
      <h1 className="text-2xl my-1 text-black">Sign In</h1>
      <form action={formAction} className="flex flex-col gap-y-0.25 max-w-sm">
        <div className="flex flex-col gap-y-0.125 bg-accent rounded-md p-0.25">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-gray-200 border-3 border-main rounded-sm focus:border-4"
          />
        </div>
        <div className="flex flex-col gap-y-0.125 bg-accent rounded-md p-0.25">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="bg-gray-200 border-3 border-main rounded-sm focus:border-4"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-main px-1 py-0.5 text-white hover:bg-main/80 w-fit"
        >
          {pending ? "Signing In..." : "Sign In"}
        </button>
      </form>
      {state?.error && (
        <p className="text-red-600 text-sm mt-0.5">{state.error}</p>
      )}
      <Link
        href="/"
        className="rounded bg-main px-1 py-0.5 text-white hover:bg-main/80 inline-block mt-0.5"
      >
        Back
      </Link>
    </>
  );
}
