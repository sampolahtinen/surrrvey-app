import React, { FC } from "react";
import {
  Container,
  WelcomeText,
  FlexWrapper,
  StyledLabel,
  CallToActionButton
} from "./LandingPage.styles";
import { LandingPageProps } from "./types";
import { config, useTransition } from "react-spring";
import { colors } from "../../styles/colors";

const LandingPage: FC<LandingPageProps> = ({ history }) => {
  const handleScroll = () => {
    const body = document.querySelector("body") as any;
    body.style.position = "fixed";
    history.push("/surveys");
  };

  const text = ["Welcome to...", "...Surrrvey App!"];

  const transitions = useTransition(text, null, {
    from: { transform: "translate3d(0,-100%,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: { transform: "translate3d(-100%,0,0)", opacity: 0 },
    reset: true,
    config: config.slow
  });

  return (
    <Container
      className="landing-page"
      onWheel={handleScroll}
      onTouchMove={handleScroll}
    >
      {transitions.map(({ item, props }) => (
        <WelcomeText key={item} style={props}>
          {item}
        </WelcomeText>
      ))}
      <FlexWrapper>
        <CallToActionButton
          style={{ marginBottom: "16px" }}
          onClick={handleScroll}
        >
          Click
        </CallToActionButton>
        <StyledLabel style={{ opacity: 0.4 }}>or</StyledLabel>
        <StyledLabel
          style={{ color: colors.lila, fontSize: "24px", fontWeight: 600 }}
        >
          Scroll
        </StyledLabel>
      </FlexWrapper>
    </Container>
  );
};

export default LandingPage;
