import React from "react";

export const HamburgerIcon = ({ width, height, ...props }) => (
  <svg
    id="i-menu"
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
    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
  </svg>
);

HamburgerIcon.defaultProps = {
  width: 32,
  height: 32
};
