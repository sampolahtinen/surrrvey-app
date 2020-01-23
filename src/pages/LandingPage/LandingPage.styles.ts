import styled from "styled-components";
import { colors } from "../../styles/colors";
import landingBackground from "../../styles/assets/landing-bg.png";
import { animated } from "react-spring";
import { Button } from "../../components/Elements/Button";
import { breakPoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${landingBackground});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const WelcomeText = styled(animated.h1)`
  position: relative;
  margin-left: 100px;
  color: ${colors.darkLila};
  font-size: 100px;
  z-index: 100;
  margin-bottom: 32px;
  @media (max-width: ${breakPoints.tablet}) {
    font-size: 64px;
  }
  @media (max-width: ${breakPoints.phone}) {
    text-align: center;
    font-size: 42px;
    margin-left: 0;
  }
`;

export const ScrollText = styled.span`
  position: relative;
  color: ${colors.darkGrey};
  font-size: 16px;
`;

export const VerticalLine = styled.div`
  margin: auto;
  width: 1px;
  height: 50px;
  background: ${colors.darkGrey};
`;

export const ScrollElement = styled.div`
  position: relative;
`;
export const StyledLabel = styled.span`
  position: relative;
  margin-bottom: 16px;
`;

export const CallToActionButton = styled(Button)`
  color: ${colors.lila};
  font-weight: 600;
  font-size: 24px;
  background: transparent;
  width: 150px;
  height: 50px;
  transition: 300ms all;
  &:hover {
    color: ${colors.white};
    background-color: ${colors.lila};
  }
`;

export const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;
