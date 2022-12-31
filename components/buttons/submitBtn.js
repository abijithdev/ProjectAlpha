import React from "react";
const SubmitBtn = ({
  submitFn = () => {},
  btnName = "Submit",
  className = "",
}) => {
  //  const { className = "", btnName = "submit", ...restProps } = props;
  return (
    <button className={`${className}`} onClick={submitFn} type="submit">
      {btnName}
    </button>
  );
};

export default SubmitBtn;
