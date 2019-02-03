import React from "react";
import { func, bool } from "prop-types";
import { Logo, HamburgerIcon, CloseIcon } from "components/icons";
import { MobileNav, HeaderWrapper, HeaderInnerWrapper } from "./styles";

export const Header = ({ isMobileNavigationOpen, onMobileNavigationClick }) => (
  <HeaderWrapper>
    <HeaderInnerWrapper>
      <Logo />
      <MobileNav onClick={onMobileNavigationClick}>
        {isMobileNavigationOpen ? (
          <CloseIcon width={28} height={28} />
        ) : (
          <HamburgerIcon />
        )}
      </MobileNav>
    </HeaderInnerWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  isMobileNavigationOpen: bool,
  onMobileNavigationClick: func
};
