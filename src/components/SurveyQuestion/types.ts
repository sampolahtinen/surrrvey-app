export interface SurveyQuestionProps {
  title: string;
  options: string[];
  onClick: (param: string) => void;
  selectedOption: string;
}
