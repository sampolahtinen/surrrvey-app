export interface AllSurveysResponse {
  surveys: SurveyResponse[];
}

export interface SurveyResponse {
  id: string;
  title: string;
  tagline: string;
}

export interface QuestionAnswer {
  question_id: string;
  value: string;
}

export interface SurveyCompletion {
  completion: QuestionAnswer[];
}
