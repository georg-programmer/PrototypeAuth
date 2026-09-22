import { auth } from "@/auth";
import { SignOut } from "../Auth/SignOut";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <h1 className="text-2xl my-1 text-black">Home</h1>
      <p className="text-sm text-gray-700 mb-0.5">
        Logged in as <span className="font-semibold">{session.user.name ?? session.user.email}</span>
      </p>
      <SignOut />
    </>
  );
};

export default Home;
