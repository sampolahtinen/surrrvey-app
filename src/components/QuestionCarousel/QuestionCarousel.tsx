import React, { FC, useState, useEffect } from "react";
import SurveyQuestion from "../SurveyQuestion";
import styled from "styled-components";
import { Button } from "../Elements/Button";
import { QuestionCarouselProps } from "./types";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NextQuestionButton = styled(Button)``;
export const PrevQuestionButton = styled(Button)``;

const QuestionCarousel: FC<QuestionCarouselProps> = ({
  questions,
  onOptionSelect,
  selectedOption,
  onQuestionChange
}) => {
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);

  useEffect(() => {
    onQuestionChange(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestion(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestion(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <SurveyQuestion
        title={questions[currentQuestionIndex].title}
        options={questions[currentQuestionIndex].options}
        selectedOption={selectedOption}
        onOptionSelect={onOptionSelect}
      />
      <ButtonsWrapper>
        <PrevQuestionButton onClick={handlePrev}>Back</PrevQuestionButton>
        <NextQuestionButton onClick={handleNext}>Next</NextQuestionButton>
      </ButtonsWrapper>
    </div>
  );
};

export default QuestionCarousel;
