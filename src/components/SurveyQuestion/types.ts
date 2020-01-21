export interface SurveyQuestionProps {
  title: string;
  options: string[];
  onOptionSelect: (param: string) => void;
  selectedOption: string;
}
