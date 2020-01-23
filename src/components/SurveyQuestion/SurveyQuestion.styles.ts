import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakPoints } from "../../styles/breakpoints";

export const QuestionList = styled.ul``;

export const QuestionTitle = styled.h3`
  margin-bottom: 2.4rem;
`;

export const QuestionsContainer = styled.div`
  width: 400px;
  height: 300px;
  @media (max-width: ${breakPoints.phone}) {
    width: 100%;
  }
`;

export const Option = styled.li<{ selected: boolean }>`
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
