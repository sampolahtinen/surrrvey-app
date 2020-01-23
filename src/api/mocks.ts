export const getAllSurveysData = {
  surveys: [
    {
      id: "001",
      title: "test",
      tagLine: "testTag"
    }
  ]
};

export const getSurveyDetailsMockData = {
  survey: {
    id: "001",
    title: "Opinion Poll",
    tagline: "Tell us about your favorite things",
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

export const postSurveyCompletionMockResponse = {
  status: "ok",
  survey_id: "001",
  action: "completion"
};

export const postSurveyCompletionMockData = {
  completion: [{ question_id: "001", value: "test" }]
};
