import React from "react";
import { shallow } from "enzyme";
import SurveyQuestion from "./SurveyQuestion";
import { Option, QuestionTitle } from "./SurveyQuestion.styles";

describe("SurveyQuestion Component", () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <SurveyQuestion
      title="testTitle"
      options={["test1", "test2"]}
      onOptionSelect={mockFunc}
      selectedOption={"test1"}
    />
  );

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays two options", () => {
    expect(wrapper.find(Option)).toHaveLength(2);
  });

  it("displays title", () => {
    expect(wrapper.find(QuestionTitle).text()).toEqual("testTitle");
  });

  it("handles option selection", () => {
    expect(
      wrapper
        .find(Option)
        .first()
        .prop("selected")
    ).toBeTruthy();
  });

  it("handles clicking", () => {
    wrapper
      .find(Option)
      .first()
      .simulate("click");
    expect(mockFunc).toHaveBeenCalled();
  });
});

// Need to test styled component, because its style is adapted based on props
describe("Question Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Option selected={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when selected", () => {
    const wrapper = shallow(<Option selected={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
