import React, { Fragment } from "react";
import NavBar from "../NavBar";
import { LayoutContainer } from "./Layout.styles";
import { LayoutProps } from "./types";
import { GlobalStyle } from "../../styles/globalStyles";

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <GlobalStyle />
    <NavBar />
    <LayoutContainer>{children}</LayoutContainer>
  </Fragment>
);

export default Layout;
