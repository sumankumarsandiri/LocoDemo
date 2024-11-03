import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();
  const { isLoading } = useHandleSignInCallback(() => {
    navigate("/");
  });

  return isLoading ? <p>Redirecting...</p> : null;
};

export default Callback;
// ======================
// import { useHandleSignInCallback } from "@logto/react";

// export const Callback = () => {
//   const { isLoading } = useHandleSignInCallback(() => {
//     // Do something when finished, e.g. redirect to home page
//   });

//   // When it's working in progress
//   if (isLoading) {
//     return <div>Redirecting...</div>;
//   }

//   return null;
// };
