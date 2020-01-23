import styled, { css } from "styled-components";

import { Button } from "../Elements/Button";
import { colors } from "../../styles/colors";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NextQuestionButton = styled(Button)<any>`
  background: transparent;
  border: none;
  color: ${colors.lila};
  font-size: 20px;
  width: auto;
  ${props =>
    props.disabled &&
    css`
      /* background-color: grey; */
      color: ${colors.grey};
      cursor: default;
      border: 0;
    `};
`;

export const QuestionCarouselContainer = styled.div`
  width: 100%;
`;

export const PrevQuestionButton = styled(NextQuestionButton)``;
