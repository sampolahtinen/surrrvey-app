import React from "react";
import { shallow } from "enzyme";
import SurveysPage from "./SurveyPage";
import SurveyList from "../../components/SurveyList";

const mockSurveys = {
  surveys: [
    {
      id: "001",
      title: "test",
      tagline: "testtag"
    }
  ]
};

jest.mock("../../hooks/useFetch");
import { useFetch } from "../../hooks/useFetch";

describe("SurveyPage Component", () => {
  useFetch.mockReturnValue([true, mockSurveys, undefined]);
  const wrapper = shallow(<SurveysPage />);
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays h1", () => {
    expect(wrapper.find("h1").text()).toBe("Surveys");
  });
});

describe("SurveyPage displays SurveyList once loading is false", () => {
  useFetch.mockReturnValue([false, mockSurveys, undefined]);
  const wrapper = shallow(<SurveysPage />);

  it("displays SurveyList", () => {
    expect(wrapper.find(SurveyList).exists()).toBeTruthy();
  });
});
