import React from "react";
import { shallow } from "enzyme";
import SurveyDetailsPage from "./SurveyDetailsPage";
import SurveyForm from "../../components/SurveyForm";
import Loading from "../../components/Loading";

const mockSurveyDetails = {
  survey: {
    id: "001",
    title: "test",
    tagline: "testtag",
    questions: [
      {
        id: "Q868b4b",
        title: "What is the best soccer team in the world?",
        options: [
          "BVB",
          "Bayern Munich",
          "Manchester United",
          "FC Barcelona",
          "Some other team"
        ]
      }
    ]
  }
};

const mockMatch = {
  params: { id: "001" },
  isExact: false,
  path: "",
  url: ""
};

jest.mock("../../hooks/useFetch");
import { useFetch } from "../../hooks/useFetch";

describe("SurveyDetailsPage Component", () => {
  useFetch.mockReturnValue([true, mockSurveyDetails, undefined]);
  const wrapper = shallow(<SurveyDetailsPage match={mockMatch} />);
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays loading before data has been fetched", () => {
    expect(
      wrapper
        .find(Loading)
        .first()
        .text()
    ).toBe("Loading");
  });
});

describe("SurveyDetailsPage data fetching", () => {
  useFetch.mockReturnValue([false, mockSurveyDetails, undefined]);
  const wrapper = shallow(<SurveyDetailsPage match={mockMatch} />);

  it("displays SurveyForm on successful data fetch", () => {
    expect(wrapper.find(SurveyForm).exists()).toBeTruthy();
    useFetch.mockReset();
  });

  // it("displays error on failed data fetch", () => {
  //   useFetch.mockReset();
  //   useFetch.mockReturnValue([false, mockSurveyDetails, "error"]);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find("span").text()).toBe("error");
  // });
});
