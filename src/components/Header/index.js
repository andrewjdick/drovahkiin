import React from "react";
import { Logo } from "components/Logo";
import { HeaderWrapper, HeaderInnerWrapper } from "./styles";

export const Header = () => (
  <HeaderWrapper>
    <HeaderInnerWrapper>
      <Logo />
    </HeaderInnerWrapper>
  </HeaderWrapper>
);
