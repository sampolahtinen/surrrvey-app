import React, { FC, useState } from "react";
import { SurveyFormProps } from "./types";
import { Link } from "react-router-dom";
import { config, useTransition } from "react-spring";
import QuestionCarousel from "../QuestionCarousel";
import { Subtitle, Form, Title, SuccessMessage } from "./SurveyForm.styles";
import { Button } from "../Elements/Button";
import { APISurveyCompletion } from "../../api/types";
import { colors } from "../../styles/colors";

const SurveyForm: FC<SurveyFormProps> = ({
  title,
  subtitle,
  questions,
  onSubmit,
  isCompleted,
  errorMessage
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const initialState = {
    completion: []
  };

  const [selectedOptions, setSelectedOptions] = useState<APISurveyCompletion>(
    initialState
  );

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

  const handleOptionSelection = (question: string) => {
    const currentQuestionId = questions[currentQuestion].id;
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(selectedOptions);
  };

  const transitions = useTransition(isCompleted, null, {
    from: { opacity: 0, transform: "scaleY(0)", transformOrigin: "top" },
    enter: { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" },
    leave: { opacity: 0, transform: "scaleY(0)", transformOrigin: "bottom" },
    config: {
      ...config.stiff,
      clamp: true
    }
  });

  return (
    <Form>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <QuestionCarousel
        questions={questions}
        onOptionSelect={handleOptionSelection}
        selectedOption={getQuestionAnswer(questions[currentQuestion].id) || ""}
        onQuestionChange={(nextQuestionIndex: number) => {
          setCurrentQuestion(nextQuestionIndex);
        }}
      />
      {currentQuestion === questions.length - 1 && (
        <Button
          type="submit"
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
              <span style={{ fontSize: "20px", color: colors.darkGrey }}>
                Your response was delivered.
              </span>
              <Link to="/surveys">Go back to Survey list</Link>
            </SuccessMessage>
          )
      )}
      {errorMessage && <span>{errorMessage}</span>}
    </Form>
  );
};

export default SurveyForm;
