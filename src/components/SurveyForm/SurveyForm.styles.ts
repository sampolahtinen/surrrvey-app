import styled from "styled-components";
import { animated } from "react-spring";
import { colors } from "../../styles/colors";
import { breakPoints } from "../../styles/breakpoints";

export const SuccessMessage = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  flex-wrap: wrap;
  span {
    display: block;
    color: ${colors.green};
    font-size: 64px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
  a {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 10;
  @media (max-width: ${breakPoints.phone}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2.4rem;
`;

export const Subtitle = styled.h2`
  margin-bottom: 6.4rem;
  color: ${colors.grey};
  font-weight: 300;
  text-align: center;
  opacity: 0.5;
`;
