import axios from "axios";
import {
  getAllSurveys,
  getSurveyDetails,
  postSurveyCompletion
} from "./surveys";
import {
  getAllSurveysData,
  getSurveyDetailsMockData,
  postSurveyCompletionMockResponse,
  postSurveyCompletionMockData
} from "./mocks";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getAllSurveys", () => {
  it("fetches successfully data from an API", async () => {
    mockedAxios.get.mockResolvedValue({ data: getAllSurveysData });
    const result = await getAllSurveys();
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.data).toBe(getAllSurveysData);
    mockedAxios.get.mockReset();
  });
});

describe("getSurveyDetails", () => {
  it("fetches successfully data from an API", async () => {
    mockedAxios.get.mockResolvedValue({ data: getSurveyDetailsMockData });
    const result = await getSurveyDetails("001");
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.data).toBe(getSurveyDetailsMockData);
    mockedAxios.get.mockReset();
  });
});

describe("postSurveyCompletion", () => {
  it("posts successfully data to the API", async () => {
    mockedAxios.post.mockResolvedValue({
      data: postSurveyCompletionMockResponse
    });
    const result = await postSurveyCompletion(
      "001",
      postSurveyCompletionMockData
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.data).toBe(postSurveyCompletionMockResponse);
    mockedAxios.post.mockReset();
  });
});
