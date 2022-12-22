"use client";
import Link from "next/link";
import React from "react";
import SubmitBtn from "../../../comonents/buttons/submitBtn";

const Login = () => {
  return (
    <div>
      <h2 className="text-red-500">Login</h2>
      <Link href="/register">Registration</Link>
      <SubmitBtn />
    </div>
  );
};

export default Login;
