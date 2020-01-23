import React from "react";
import { mount } from "enzyme";
import LandingPage from "./LandingPage";
import { createMemoryHistory } from "history";
import { WelcomeText, ScrollText, Container } from "./LandingPage.styles";

const mockHistory = createMemoryHistory();

describe("LandingPage Component", () => {
  mockHistory.push = jest.fn();
  const wrapper = mount(<LandingPage history={mockHistory} />);
  // it("renders", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  it("displays welcome text", () => {
    expect(wrapper.find(WelcomeText).text()).toEqual(
      "Welcome to Surrrvey App!"
    );
  });

  it("displays scroll text", () => {
    expect(wrapper.find(ScrollText).text()).toEqual("Scroll");
  });

  it("triggers onWheel event", () => {
    wrapper.find(Container).simulate("wheel");
    expect(mockHistory.push).toHaveBeenCalled();
  });
});
