import React from "react";

const Button = ({
  bgColor = "bg-primary",
  type = "submit",
  children,
  textColor = "text-lightwhite",
  className,
  ...props
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${className} py-2 px-4 rounded-lg w-full`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
