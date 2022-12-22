import React from "react";

const InputField = ({
  title = "",
  type = "text",
  fieldName = "",
  register = () => {},
  errors = {},
  placeHolder = "Enter here",
}) => {
  return (
    <div className="mb-4">
      {title && <label>{title}</label>}
      <input placeholder={placeHolder} {...register(fieldName)} type={type} />
      {<span>{errors[fieldName] && errors[fieldName].message}</span>}
    </div>
  );
};

export default InputField;
