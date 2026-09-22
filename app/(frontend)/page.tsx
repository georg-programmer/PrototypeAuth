import { auth } from "@/auth";

const LandingPage = async () => {
  
  const session = await auth()
    
  return (
		<>
			<a href="/login">login</a>
			{session?.user ? <a href="/home">home</a> : null}
		</>
	);
};

export default LandingPage;
