import React, { type ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = "",
  style = {},
  className = "",
  rows = 3,
  cols,
  ...props
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className={`${className}`}
      rows={rows}
      cols={cols}
      {...props}
    />
  );
};

export default TextArea;
