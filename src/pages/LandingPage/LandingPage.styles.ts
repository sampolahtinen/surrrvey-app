import styled from "styled-components";
import { colors } from "../../styles/colors";
import landingBackground from "../../styles/assets/landing-bg.png";
import { animated } from "react-spring";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${landingBackground});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const WelcomeText = styled(animated.h1)`
  position: absolute;
  top: 20%;
  left: 5%;
  color: ${colors.darkLila};
  font-size: 100px;
  z-index: 100;
`;

export const ScrollText = styled.span`
  position: relative;
  margin-bottom: 100px;
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

export const FlexWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
