import React from "react";
import {
  QuestionsContainer,
  QuestionTitle,
  QuestionList,
  Question
} from "./SurveyQuestion.styles";
import { SurveyQuestionProps } from "./types";

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  options,
  selectedOption,
  title,
  onClick
}) => {
  return (
    <QuestionsContainer style={{ marginBottom: "3.2rem" }}>
      <QuestionTitle>{title}</QuestionTitle>
      <QuestionList>
        {options.map((option: string) => (
          <Question
            key={title + option}
            onClick={() => onClick(option)}
            selected={selectedOption === option}
          >
            {option}
          </Question>
        ))}
      </QuestionList>
    </QuestionsContainer>
  );
};

export default SurveyQuestion;
