import { match } from "react-router";

export interface SurveyDetailsPageProps {
  match: match<{ id: string }>;
}

export interface FormStatus {
  status: string;
  error: string;
  isCompleted: boolean;
}
