"use client";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import InputField from "../../../components/forms/inputField";
import { countryCodeListData } from "../../../components/forms/countryCodeList";
import SubmitBtn from "../../../components/buttons/submitBtn";
import {
  mobileRegex,
  nameRegex,
  passwordRegex,
} from "../../../components/forms/formHelperData";
import PasswordField from "../../../components/forms/passwordField";
const SignUp = () => {
  const [ouputData, setOuputData] = useState({});
  const signupSchema = z.object({
    firstName: z
      .string()
      .min(1, { message: "Firstname is required" })
      .regex(nameRegex, {
        message: "Enter a valid Name",
      }),
    middleName: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .regex(nameRegex, {
        message: "Enter a valid Name",
      })
      .optional()
      .nullish(),
    lastName: z
      .string()
      .min(1, { message: "Lastname is required" })
      .regex(nameRegex, {
        message: "Enter a valid Name",
      }),
    email: z
      .string()
      .min(1, { message: "Required" })
      .email({
        message: "Must be a valid email",
      })
      .optional(),
    country: z
      .object({
        countryName: z.string(),
        dailCode: z.string(),
      })
      .optional(),
    // phoneNumber: z.number().regex(mobileRegex, {
    //   message: "Enter a valid Number",
    // }),
    password: z.string().regex(passwordRegex, {
      message:
        "Password must be at least 8 characters and contain 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character",
    }),
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const onRegisterSubmit = (data) => {
    setOuputData(data);
    reset();
  };
  return (
    <div>
      <h1 className="">Sign Up</h1>
      <form
        className="flex-col mx-4 sm:mx-auto flex max-w-xl "
        onSubmit={handleSubmit(onRegisterSubmit)}
      >
        <InputField
          title="First Name"
          fieldName="firstName"
          register={register}
          errors={errors}
          placeHolder="Enter your First Name"
        />
        <InputField
          title="Middle Name"
          fieldName="middleName"
          register={register}
          errors={errors}
          placeHolder="Enter your Middle Name"
        />
        <InputField
          title="Last Name"
          fieldName="lastName"
          register={register}
          errors={errors}
          placeHolder="Enter your Last Name"
        />
        <InputField
          title="Email"
          fieldName="email"
          register={register}
          errors={errors}
          placeHolder="Enter your email"
        />
        <label htmlFor="country">Country</label>
        <select {...register("country")} id="country">
          {countryCodeListData.map((item) => {
            return (
              <option
                key={item.name}
                value={JSON.stringify({
                  country: item.name,
                  dailCode: item.dial_code,
                })}
              >
                {item.name}
              </option>
            );
          })}
        </select>
        <InputField
          fieldName="phoneNumber"
          register={register}
          errors={errors}
          placeHolder="Enter your mobile number"
        />
        <PasswordField
          fieldName="password"
          errors={errors}
          register={register}
          placeHolder="Enter your password"
          title="Password"
        />
        <div className="mt-5">
          {Object.entries(ouputData).map(([key, value]) => {
            return (
              <div className="flex">
                <span>:{key}</span>
                <span>
                  :{typeof value === "object" ? JSON.stringify(value) : value}
                </span>
              </div>
            );
          })}
        </div>
        <SubmitBtn btnName="SIGN UP" />
      </form>
      {/* <button onClick={() => console.log(a)}></button> */}
      <Link href="/login">Login</Link>
    </div>
  );
};
/*delete this comment*/
export default SignUp;
