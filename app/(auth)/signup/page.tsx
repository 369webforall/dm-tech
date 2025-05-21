import SignUp from "@/components/auth/sign-up";
import { Suspense } from "react";
import React from "react";

const SignupPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-4 w-full flex justify-center">
        <SignUp />
      </div>
    </Suspense>
  );
};

export default SignupPage;
