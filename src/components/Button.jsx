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
      className={`${bgColor} ${textColor} ${className} py-2 px-4`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
