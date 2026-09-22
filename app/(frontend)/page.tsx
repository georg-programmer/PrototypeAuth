import Link from "next/link";
import { auth } from "@/auth";

const LandingPage = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="text-2xl my-1 text-black">Welcome!</h1>
      <div className="flex gap-1">
        <Link
          href="/login"
          className="rounded bg-main px-1 py-0.5 text-white hover:bg-main/80"
        >
          Login
        </Link>
        {session?.user ? (
          <Link
            href="/home"
            className="rounded bg-main px-1 py-0.5 text-white hover:bg-main/80"
          >
            Home
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default LandingPage;
