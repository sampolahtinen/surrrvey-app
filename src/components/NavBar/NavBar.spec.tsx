import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import NavBar from "./NavBar";
import { StyledNavLink } from "./NavBar.styles";
import { routes } from "../../lib/routes";

describe("NavBar Component", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  );
  it("renders", () => {
    expect(wrapper.find(".navbar").exists()).toEqual(true);
  });
  it("displays two three items", () => {
    expect(wrapper.find(StyledNavLink)).toHaveLength(routes.length);
  });
});
