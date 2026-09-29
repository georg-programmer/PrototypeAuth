import { auth } from "@/auth"
import { SignOut } from "./SignOut";
import { SignInForm } from "./SignInForm";

// Server-Komponente: zeigt Login-Formular oder "bereits eingeloggt"
export async function SignIn() {
  // Aktuelle Session vom Server abrufen
  const session = await auth();

  // Wenn User schon eingeloggt ist → SignOut-Button anzeigen
  if (session?.user) {
    return (
      <>
        <h1 className="text-2xl my-1 text-black">Already Logged In</h1>
        <p className="text-sm text-gray-700 mb-0.5">You are already signed in.</p>
        <SignOut />
      </>
    );
  }

  return <SignInForm />;
}

export default SignIn;
