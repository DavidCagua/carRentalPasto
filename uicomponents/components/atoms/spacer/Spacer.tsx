import React from "react";
import "./spacer.module.css";
import classNames from "classnames";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

interface SpacerProps {
  size:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64;
  isVisible?: boolean;
}
interface spacing {
  [index: number]: string;
}
const spacing: spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};
const Spacer = ({ size, isVisible, ...props }: SpacerProps) => {
  return (
    <div
      className={classNames("spacer", { "is-visible": isVisible })}
      style={{
        display: "inline-block",
        width: spacing[size],
        height: spacing[size],
      }}
    ></div>
  );
};
Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;

export default Spacer;
