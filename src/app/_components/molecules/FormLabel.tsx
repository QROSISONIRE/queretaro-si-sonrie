import React, { type ReactNode } from "react";

interface FormHeaderProps {
  label?: string;
  name?: string;
  className?: string;
  children?: ReactNode;
}

const FormLabel: React.FC<FormHeaderProps> = ({
  label = "",
  name = "",
  className = "",
  children,
}) => {
  return (
    <div className="mb-4">
      <label className={className} htmlFor={name}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormLabel;
