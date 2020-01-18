export interface AllSurveysResponse {
  surveys: SurveyResponse[];
}

export interface SurveyResponse {
  id: string;
  title: string;
  tagline: string;
}
