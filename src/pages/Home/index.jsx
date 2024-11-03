import { useLogto } from "@logto/react";

const Home = () => {
  const { signIn, signOut, isAuthenticated } = useLogto();

  return isAuthenticated ? (
    <button onClick={signOut}>Sign Out</button>
  ) : (
    <button onClick={() => signIn("http://localhost:3000/callback")}>
      Sign In
    </button>
  );
};
