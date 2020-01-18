import { RouteComponentProps, match } from "react-router";

export interface SurveyDetailsPageProps extends RouteComponentProps {
  match: match<{ id: string }>;
}
