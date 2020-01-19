import styled from "styled-components";
import { colors } from "../../styles/colors";
import { animated } from "react-spring";

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
export const SubmitButton = styled(Button)``;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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

export const Wrapper = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 10;
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
