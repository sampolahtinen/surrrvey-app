import React, { FC, useState } from "react";
import SurveyList from "../../components/SurveyList";
import { useFetch } from "../../hooks/useFetch";
import { getSurveyDetails } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";
import { SurveyDetailsPageProps } from "./types";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px ${colors.lila} solid;
  background-color: ${colors.lila};
  color: ${colors.offWhite};
  cursor: pointer;
`;

export const NextQuestionButton = styled(Button)``;
export const PrevQuestionButton = styled(Button)``;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 2.4rem;
`;

export const TagLine = styled.h2`
  margin-bottom: 6.4rem;
  color: ${colors.grey};
  font-weight: 300;
  opacity: 0.5;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionsContainer = styled.div`
  width: 400px;
`;
export const QuestionList = styled.ul``;
export const QuestionTitle = styled.h3`
  margin-bottom: 2.4rem;
`;
export const Question = styled.li<{ selected: boolean }>`
  margin-bottom: 1.6rem;
  border-radius: 12px;
  background-color: ${props =>
    props.selected ? colors.darkLila : colors.offWhite};
  color: ${props => (props.selected ? colors.offWhite : colors.darkGrey)};
  padding: 0.8rem;
  &:hover {
    background-color: ${colors.darkLila};
    color: ${colors.offWhite};
  }
`;

interface Answer {
  question_id: string;
  value: string;
}

interface SurveyCompletion {
  completion: Answer[];
}

const SurveyDetailsPage: FC<SurveyDetailsPageProps> = ({ match }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const initialState = {
    completion: []
  };
  const [selectedOptions, setSelectedOptions] = useState<SurveyCompletion>(
    initialState
  );
  const id = match.params.id;
  const [loading, { survey }, error] = useFetch(getSurveyDetails, id);

  const handleNext = () => {
    if (currentQuestion < survey.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getAnswer = (answer: string) => {
    const answerIndex = selectedOptions.completion.findIndex(
      elem => elem.value === answer
    );

    return answerIndex;
  };

  const getQuestionIndex = (questionId: string) => {
    const answers = selectedOptions.completion;
    const questionIndex = answers.findIndex(
      elem => elem.question_id === questionId
    );
    return questionIndex;
  };

  const handleClick = (question: string) => {
    const currentQuestionId = survey.questions[currentQuestion].id;
    const questionIndex = getQuestionIndex(currentQuestionId);

    // If question has not been answered, append it to the completion array
    if (questionIndex === -1) {
      setSelectedOptions({
        completion: [
          ...selectedOptions.completion,
          {
            question_id: currentQuestionId,
            value: question
          }
        ]
      });
      // if question is found from completion, update its value
    } else {
      const nextState = selectedOptions.completion;

      nextState[questionIndex] = {
        question_id: currentQuestionId,
        value: question
      };

      setSelectedOptions({
        completion: nextState
      });
    }
  };

  console.log(survey);

  return (
    <Layout>
      <FlexWrapper className="survey-deytails-page">
        {/* //TODO: create loading component */}
        {loading && <span>Loading</span>}
        {!loading && (
          <>
            <Wrapper>
              <Title>{survey.title}</Title>
              <TagLine>{survey.tagline}</TagLine>
              <div>
                <QuestionsContainer style={{ marginBottom: "3.2rem" }}>
                  <QuestionTitle>
                    {survey.questions[currentQuestion].title}
                  </QuestionTitle>
                  <QuestionList>
                    {survey.questions[currentQuestion].options.map(
                      (option: string) => (
                        <Question
                          onClick={() => handleClick(option)}
                          selected={getAnswer(option) > -1}
                        >
                          {option}
                        </Question>
                      )
                    )}
                  </QuestionList>
                </QuestionsContainer>
                <ButtonsWrapper>
                  <PrevQuestionButton onClick={handlePrev}>
                    Back
                  </PrevQuestionButton>
                  <NextQuestionButton onClick={handleNext}>
                    Next
                  </NextQuestionButton>
                </ButtonsWrapper>
              </div>
            </Wrapper>
          </>
        )}
        {!error && <span>{error}</span>}
      </FlexWrapper>
    </Layout>
  );
};

export default SurveyDetailsPage;
