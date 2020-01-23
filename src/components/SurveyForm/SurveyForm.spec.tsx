import React from "react";
import { mount } from "enzyme";
import SurveyForm from "./SurveyForm";
import { Title, Subtitle, Form } from "./SurveyForm.styles";
import { Button } from "../Elements/Button";
import { Option } from "../SurveyQuestion/SurveyQuestion.styles";
import { NextQuestionButton } from "../QuestionCarousel/QuestionCarousel.styles";

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

describe("SurveyForm  Component", () => {
  const mockSubmitFunc = jest.fn();
  const wrapper = mount(
    <SurveyForm
      title="testTitle"
      subtitle="testSubtitle"
      isCompleted={false}
      questions={mockQuestions}
      onSubmit={mockSubmitFunc}
    />
  );

  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays title", () => {
    expect(wrapper.find(Title).text()).toEqual("testTitle");
  });

  it("displays subtitle", () => {
    expect(wrapper.find(Subtitle).text()).toEqual("testSubtitle");
  });

  it("selects a question option", () => {
    // Find a option
    const firstOption = wrapper.find(Option).first();
    // Click it
    firstOption.simulate("click");
    // Find the first option again and make assertion
    expect(
      wrapper
        .find(Option)
        .first()
        .prop("selected")
    ).toBeTruthy();
  });

  it("changes selected option", () => {
    const secondOption = wrapper.find(Option).last();
    secondOption.simulate("click");

    // Assert that previously selected option gets unselected
    expect(
      wrapper
        .find(Option)
        .first()
        .prop("selected")
    ).toBeFalsy();

    // Assert that the second option gets selected
    expect(
      wrapper
        .find(Option)
        .at(1)
        .prop("selected")
    ).toBeTruthy();
  });

  it("displays submit button when last question ", () => {
    // Find carousel next button and click it
    wrapper.find(NextQuestionButton).simulate("click");
    // When last element of the carousel is in the viewport, display submit button
    expect(wrapper.find(Button).exists()).toBeTruthy();
    // Click submit
    wrapper.find(Button).simulate("click");
    // Should trigger onSubmit prop
    expect(mockSubmitFunc).toHaveBeenCalled();
    // console.log(mockSubmitFunc.mock.calls[0][0]);
  });
});
