import React from "react";

const InputField = ({
  title = "",
  type = "text",
  fieldName = "",
  register = () => {},
  errors = {},
  placeHolder = "Enter here",
  containerClassName = "flex flex-col mb-4",
  inputClassName = "",
}) => {
  return (
    <div className={`${containerClassName}`}>
      {title && <label htmlFor={fieldName}>{title}</label>}
      <input
        className={`border border-solid border-${
          errors[fieldName] ? "rose-500" : "slate-200"
        } focus:outline-none ${inputClassName}`}
        id={fieldName}
        placeholder={placeHolder}
        {...register(fieldName)}
        type={type}
      />
      {
        <span className="">
          {errors[fieldName] && errors[fieldName].message}
        </span>
      }
    </div>
  );
};

export default InputField;
