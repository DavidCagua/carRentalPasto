import React from "react";
import "./heading.module.css";
import classNames from "classnames";

interface HeadingProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "default" | "primary";
  /**
  /**
   * How large should the Heading be?
   */
  size?: "sm" | "md" | "xsm";
  /**
   * Heading contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Heading = ({
  type = "default",
  size = "md",
  label,
  ...props
}: HeadingProps) => {
  return (
    <h1
      className={classNames(
        "heading",
        { [`heading--${type}`]: type },
        { [`heading--${size}`]: type }
      )}
      {...props}
    >
      {label}
    </h1>
  );
};
