import React from "react";
import { number } from "prop-types";

export const CloseIcon = ({ width, height, ...props }) => (
  <svg
    id="i-close"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    {...props}
  >
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
);

CloseIcon.propTypes = {
  width: number,
  height: number
};

CloseIcon.defaultProps = {
  width: 32,
  height: 32
};
