import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";
import { LayoutContainer } from "./Layout.styles";

describe("NavBar Component", () => {
  const wrapper = shallow(
    <Layout>
      <div className="test">test</div>
      <div className="test">test</div>
      <div className="test">test</div>
    </Layout>
  );

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays children", () => {
    expect(wrapper.find(LayoutContainer).exists()).toBe(true);
    expect(wrapper.find(".test")).toHaveLength(3);
  });
});
