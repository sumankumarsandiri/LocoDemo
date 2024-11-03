import { useLogto } from "@logto/react";

const Login = () => {
  const { signIn, signOut } = useLogto();
  // const { signIn, signOut, isAuthenticated } = useLogto();
  return (
    <div>
      <button onClick={() => signIn("http://localhost:3000/callback")}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
