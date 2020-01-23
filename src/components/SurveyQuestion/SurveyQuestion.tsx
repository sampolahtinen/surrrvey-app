import React from "react";
import {
  QuestionsContainer,
  QuestionTitle,
  QuestionList,
  Option
} from "./SurveyQuestion.styles";
import { SurveyQuestionProps } from "./types";

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  options,
  selectedOption,
  title,
  onOptionSelect
}) => {
  return (
    <QuestionsContainer style={{ marginBottom: "3.2rem" }}>
      <QuestionTitle>{title}</QuestionTitle>
      <QuestionList>
        {options.map((option: string) => (
          <Option
            key={title + option}
            onClick={() => onOptionSelect(option)}
            selected={selectedOption === option}
          >
            {option}
          </Option>
        ))}
      </QuestionList>
    </QuestionsContainer>
  );
};

export default SurveyQuestion;
