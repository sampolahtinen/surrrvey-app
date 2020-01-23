import { APISurveyQuestion } from "../../api/types";

export interface QuestionCarouselProps {
  questions: APISurveyQuestion[];
  onOptionSelect: (param: string) => void;
  selectedOption: string;
  onQuestionChange: any;
}
