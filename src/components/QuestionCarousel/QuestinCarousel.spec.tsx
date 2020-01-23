import React from "react";
import { shallow, mount } from "enzyme";
import QuestionCarousel from "./QuestionCarousel";
import SurveyQuestion from "../SurveyQuestion";
import {
  NextQuestionButton,
  PrevQuestionButton
} from "./QuestionCarousel.styles";

const mockQuestions = [
  {
    id: "001",
    title: "firstQuestion",
    options: ["test1", "test2"]
  },
  {
    id: "002",
    title: "secondQuestion",
    options: ["test1", "test2"]
  }
];

describe("QuestionCarousel Component", () => {
  const mockFunc = jest.fn();
  const anotherMockFunc = jest.fn();
  const wrapper = mount(
    <QuestionCarousel
      questions={mockQuestions}
      onOptionSelect={mockFunc}
      selectedOption={"test1"}
      onQuestionChange={anotherMockFunc}
    />
  );

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("switches question when user clicks Next", () => {
    wrapper.find(NextQuestionButton).simulate("click");
    expect(wrapper.find(SurveyQuestion).prop("title")).toEqual(
      "secondQuestion"
    );
  });

  it("triggers onQuestionChange when currentQuestionIndex changes", () => {
    expect(anotherMockFunc).toHaveBeenCalled();
  });

  it("disables next button when displaying the last element", () => {
    expect(wrapper.find(NextQuestionButton).prop("disabled")).toBeTruthy();
  });

  it("can show previous question when user clicks Back", () => {
    wrapper.find(PrevQuestionButton).simulate("click");
    expect(wrapper.find(SurveyQuestion).prop("title")).toEqual("firstQuestion");
  });

  it("disables Back button when displaying the first element", () => {
    expect(wrapper.find(PrevQuestionButton).prop("disabled")).toBeTruthy();
  });
});

// Need to test styled component, because its style is adapted based on props
describe("Next- and PrevQuestionButton Component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<NextQuestionButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const wrapper = shallow(<NextQuestionButton disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
