import React, { FC, useState, useEffect } from "react";
import SurveyQuestion from "../SurveyQuestion";
import { QuestionCarouselProps } from "./types";
import {
  QuestionCarouselContainer,
  ButtonsWrapper,
  PrevQuestionButton,
  NextQuestionButton
} from "./QuestionCarousel.styles";

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

  const handleNext = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestionIndex + 1);
  };
  const handlePrev = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestionIndex - 1);
  };

  return (
    <QuestionCarouselContainer className="question-carousel">
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
    </QuestionCarouselContainer>
  );
};

export default QuestionCarousel;
