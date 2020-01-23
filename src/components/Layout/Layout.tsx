import React, { Fragment } from "react";
import NavBar from "../NavBar";
import { LayoutContainer } from "./Layout.styles";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <NavBar />
    <LayoutContainer>{children}</LayoutContainer>
  </Fragment>
);

export default Layout;
