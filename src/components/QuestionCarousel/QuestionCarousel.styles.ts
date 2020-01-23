import styled, { css } from "styled-components";

import { Button } from "../Elements/Button";

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

export const QuestionCarouselContainer = styled.div`
  width: 100%;
`;

export const PrevQuestionButton = styled(NextQuestionButton)``;
