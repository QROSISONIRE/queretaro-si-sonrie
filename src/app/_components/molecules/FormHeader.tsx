import React, { type ReactNode } from "react";

interface FormHeaderProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title = "",
  subtitle,
  className = "",
}) => {
  return (
    <div className={className}>
      {title && <h2 className="text-4xl font-bold text-gray-800">{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default FormHeader;
