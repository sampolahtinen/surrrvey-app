import { RouteComponentProps, match } from "react-router";

export interface SurveyDetailsPageProps extends RouteComponentProps {
  match: match<{ id: string }>;
}

export interface FormStatus {
  status: string;
  error: string;
  isCompleted: boolean;
}
