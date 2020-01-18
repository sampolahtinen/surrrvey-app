import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Layout from "./Layout";
import { LayoutContainer } from "./Layout.styles";

describe("NavBar Component", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Layout>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
      </Layout>
    </MemoryRouter>
  );

  it("displays children", () => {
    expect(wrapper.find(LayoutContainer).exists()).toBe(true);
    expect(wrapper.find(".test")).toHaveLength(3);
  });
});
