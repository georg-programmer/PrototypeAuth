import { auth } from "@/auth"
import { SignOut } from "./SignOut";
import { SignInForm } from "./SignInForm";

export async function SignIn() {
  const session = await auth();

  if (session?.user) {
    return (<>
    <p>you are already logged in!</p>
      <SignOut></SignOut>
    </>
    );
  }

  return (
    <SignInForm />
  )
}

export default SignIn;