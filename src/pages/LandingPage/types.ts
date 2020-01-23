import { RouteComponentProps } from "react-router";
import { History, LocationState } from "history";

export type LandingPageProps = {
  // history: Pick<RouteComponentProps, "history">;
  history: History<LocationState>;
};
