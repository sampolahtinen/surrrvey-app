import React from "react";
import { shallow } from "enzyme";
import SurveyList from "./SurveyList";
import { Survey, TagLine } from "./SurveyList.styles";

export const mockSurveys = [
  { id: "001", title: "surveyMock1", tagline: "surveyTagline1" },
  { id: "002", title: "surveyMock2", tagline: "surveyTagline2" }
];

describe("SurveyList Component", () => {
  const wrapper = shallow(<SurveyList surveys={mockSurveys} />);

  // it("renders", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  it("displays two surveys", () => {
    expect(wrapper.find(Survey)).toHaveLength(2);
  });

  it("displays a title of a survey", () => {
    expect(
      wrapper
        .find("h3")
        .first()
        .text()
    ).toEqual("surveyMock1");
  });

  it("displays a tag line of a survey", () => {
    expect(
      wrapper
        .find(TagLine)
        .first()
        .text()
    ).toEqual("surveyTagline1");
  });
});
