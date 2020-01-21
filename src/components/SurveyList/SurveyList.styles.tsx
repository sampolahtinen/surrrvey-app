import styled from "styled-components";
import { colors } from "../../styles/colors";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

export const SurveyListContainer = styled.div`
  width: 100%;
`;

export const List = styled.div``;

export const TagLine = styled.span`
  color: ${colors.grey};
  opacity: 0.3;
`;

const AnimatedLink = animated(Link);

export const Survey = styled(AnimatedLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 2.4rem 0;
  color: ${colors.darkGrey};
  &:hover {
    transition: 300ms all;
    color: ${colors.lila};
    ${TagLine} {
      transition: 300ms all;
      color: ${colors.lila};
      opacity: 1;
    }
  }
`;

export const Separator = styled.div`
  width: 24px;
  height: 1px;
  background-color: ${colors.grey};
  margin: 0 2rem;
`;
