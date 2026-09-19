import { auth } from "@/auth";
import { SignOut } from "../Auth/SignOut";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <SignOut></SignOut>
  );
};

export default Home;