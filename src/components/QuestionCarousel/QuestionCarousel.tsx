import React, { FC, useState, useEffect } from "react";
import SurveyQuestion from "../SurveyQuestion";
import styled, { css } from "styled-components";
import { Button } from "../Elements/Button";
import { QuestionCarouselProps } from "./types";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NextQuestionButton = styled(Button)`
  ${props =>
    props.disabled &&
    css`
      background-color: grey;
      border: 0;
    `}
`;

export const PrevQuestionButton = styled(NextQuestionButton)``;

const QuestionCarousel: FC<QuestionCarouselProps> = ({
  questions,
  onOptionSelect,
  selectedOption,
  onQuestionChange
}) => {
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);

  useEffect(() => {
    onQuestionChange(currentQuestionIndex);
  }, [currentQuestionIndex, onQuestionChange]);

  const handleNext = () => setCurrentQuestion(currentQuestionIndex + 1);
  const handlePrev = () => setCurrentQuestion(currentQuestionIndex - 1);

  return (
    <div>
      <SurveyQuestion
        title={questions[currentQuestionIndex].title}
        options={questions[currentQuestionIndex].options}
        selectedOption={selectedOption}
        onOptionSelect={onOptionSelect}
      />
      <ButtonsWrapper>
        <PrevQuestionButton
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          Back
        </PrevQuestionButton>
        <NextQuestionButton
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </NextQuestionButton>
      </ButtonsWrapper>
    </div>
  );
};

export default QuestionCarousel;
