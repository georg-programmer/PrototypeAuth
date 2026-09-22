import { signOut } from "@/auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <button
        type="submit"
        className="rounded bg-red-600 px-1 py-0.5 text-white hover:bg-red-700 w-fit"
      >
        Sign Out
      </button>
    </form>
  )
}
