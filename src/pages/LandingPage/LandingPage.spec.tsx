import React from "react";
import { mount } from "enzyme";
import LandingPage from "./LandingPage";
import { createMemoryHistory } from "history";
import {
  WelcomeText,
  Container,
  CallToActionButton
} from "./LandingPage.styles";

const mockHistory = createMemoryHistory();

// Snapshot testing has been omitted due to use of animated springs
// In order to make snapshot possible, react-spring's useTransition should be mocked.
describe("LandingPage Component", () => {
  mockHistory.push = jest.fn();
  const wrapper = mount(<LandingPage history={mockHistory} />);
  it("displays welcome text", () => {
    expect(wrapper.find(WelcomeText)).toHaveLength(2);
  });

  it("triggers page navigation on button click", () => {
    wrapper.find(CallToActionButton).simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it("triggers onWheel event", () => {
    wrapper.find(Container).simulate("wheel");
    expect(mockHistory.push).toHaveBeenCalledTimes(2);
  });
});
