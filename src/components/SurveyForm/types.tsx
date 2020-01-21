import { APISurveyDetailsResponse } from "../../api/types";

export interface SurveyFormProps {
  title: string;
  subtitle: string;
  questions: APISurveyDetailsResponse["questions"];
  onSubmit: (params: any) => any;
  isCompleted: boolean;
  errorMessage?: string | boolean;
}
