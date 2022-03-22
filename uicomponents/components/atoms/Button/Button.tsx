import React from "react";
import "./button.module.css";
import classNames from "classnames";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "secondary";
  /**
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg";
  /**
   * Button contents
   */
  children?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "button",
        { [`button--${type}`]: type },
        { [`button--${size}`]: type }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
