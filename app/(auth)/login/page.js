"use client";
import Link from "next/link";
import React from "react";
import SubmitBtn from "../../../components/buttons/submitBtn";

const Login = () => {
  return (
    <>
      <main>
        <h2 className="text-red-500">Login</h2>
        <form>
          <SubmitBtn btnName="LOGIN" />
        </form>
      </main>

      <Link href="/signup">SIGN UP</Link>
    </>
  );
};

export default Login;
