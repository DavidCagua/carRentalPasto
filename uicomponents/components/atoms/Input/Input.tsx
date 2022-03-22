import React from "react";
import "./input.module.css";

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  placeholder: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
  size = "medium",
  backgroundColor,
  placeholder,
  ...props
}: InputProps) => {
  const mode = primary ? "input--primary" : "input--secondary";
  return (
    <input
      type="text"
      className={["input", `input--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      placeholder={placeholder}
      {...props}
    />
  );
};
