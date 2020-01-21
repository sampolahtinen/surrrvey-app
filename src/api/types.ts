export interface AllSurveysResponse {
  surveys: APISurveyResponse[];
}

export interface APISurveyResponse {
  id: string;
  title: string;
  tagline: string;
}

export interface QuestionAnswer {
  question_id: string;
  value: string;
}

export interface APISurveyCompletion {
  completion: QuestionAnswer[];
}

export interface APISurveyQuestion {
  id: string;
  title: string;
  options: string[];
}

export interface APISurveyDetailsResponse extends APISurveyResponse {
  questions: APISurveyQuestion[];
}
