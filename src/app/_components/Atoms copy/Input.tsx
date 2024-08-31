import React, { type ChangeEvent } from "react";

interface InputProps {
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  style = {},
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className}`}
      style={style}
      {...props}
    />
  );
};

export default Input;
