import React, { useState } from "react";
import Image from "next/image";
import eyeOnIcon from "../../assets/icons/auth/opened-eye.svg";
import eyeOffIcon from "../../assets/icons/auth/closed-eye.svg";

const PasswordField = ({
  register = () => {},
  fieldName = "",
  placeHolder = "Enter here",
  errors = {},
  inputClass = "",
  ariaLabel = "Password",
  containerClass = "",
  title = "",
  isShowPassword = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {title && <label htmlFor={fieldName}>{title}</label>}
      <div
        className={`flex justify-between
    border border-solid border-${errors[fieldName] ? "rose-500" : "slate-200"}
    ${containerClass}`}
      >
        <input
          aria-label={ariaLabel}
          className={`
        focus:outline-none ${inputClass} w-full`}
          id={fieldName}
          placeholder={placeHolder}
          {...register(fieldName)}
          type={showPassword ? "text" : "password"}
        />
        {isShowPassword && (
          <Image
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? eyeOnIcon : eyeOffIcon}
            alt={showPassword ? "show password" : "hide password"}
          />
        )}
      </div>
    </>
  );
};

export default PasswordField;
