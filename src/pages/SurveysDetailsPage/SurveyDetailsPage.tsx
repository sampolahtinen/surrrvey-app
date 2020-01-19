import React, { FC, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getSurveyDetails, postSurveyCompletion } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";
import { SurveyDetailsPageProps, SubmitStatus } from "./types";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { SurveyCompletion } from "../../api/types";
import { Link } from "react-router-dom";
import { config, useTransition } from "react-spring";
import SurveyQuestion from "../../components/SurveyQuestion/SurveyQuestion";
import {
  Wrapper,
  ButtonsWrapper,
  PrevQuestionButton,
  NextQuestionButton,
  Button,
  SuccessMessage,
  Title,
  TagLine,
  FlexWrapper
} from "./SurveyDetailsPage.styles";

const SurveyDetailsPage: FC<SurveyDetailsPageProps> = ({ match }) => {
  const id = match.params.id;
  const initialState = {
    completion: []
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    status: "",
    error: ""
  });

  const [selectedOptions, setSelectedOptions] = useState<SurveyCompletion>(
    initialState
  );

  const [loading, { survey }, error] = useFetch(getSurveyDetails, id);

  const transitions = useTransition(isMessageVisible, null, {
    from: { opacity: 0, transform: "scaleY(0)", transformOrigin: "top" },
    enter: { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" },
    leave: { opacity: 0, transform: "scaleY(0)", transformOrigin: "bottom" },
    config: {
      ...config.stiff,
      clamp: true
    }
  });

  const handleNext = () => {
    if (currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getQuestionAnswer = (questionId: string) =>
    selectedOptions.completion.find(elem => elem.question_id === questionId)
      ?.value;

  const getQuestionIndex = (questionId: string) => {
    const answers = selectedOptions.completion;
    const questionIndex = answers.findIndex(
      elem => elem.question_id === questionId
    );
    return questionIndex;
  };

  const handleSubmit = async () => {
    try {
      const response = await postSurveyCompletion(id, selectedOptions);
      setSubmitStatus({
        ...submitStatus,
        status: response.data.status
      });
      setIsMessageVisible(true);
    } catch (error) {
      setSubmitStatus({
        ...submitStatus,
        error
      });
    }
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
                <SurveyQuestion
                  title={survey.questions[currentQuestion].title}
                  options={survey.questions[currentQuestion].options}
                  selectedOption={
                    getQuestionAnswer(survey.questions[currentQuestion].id) ||
                    ""
                  }
                  onClick={handleClick}
                />
                <ButtonsWrapper>
                  <PrevQuestionButton onClick={handlePrev}>
                    Back
                  </PrevQuestionButton>
                  <NextQuestionButton onClick={handleNext}>
                    Next
                  </NextQuestionButton>
                </ButtonsWrapper>
              </div>
              {currentQuestion === survey.questions.length - 1 && (
                <Button
                  onClick={handleSubmit}
                  style={{ marginTop: "2rem", width: "150px", height: "50px" }}
                >
                  Submit
                </Button>
              )}
              {transitions.map(
                ({ item, props }) =>
                  item && (
                    <SuccessMessage style={props}>
                      <span>Success!</span>
                      <Link to="/surveys">Go back to Survey list</Link>
                    </SuccessMessage>
                  )
              )}
            </Wrapper>
          </>
        )}
        {!error && <span>{error}</span>}
      </FlexWrapper>
    </Layout>
  );
};

export default SurveyDetailsPage;
