import React, { FC } from "react";
import {
  Container,
  WelcomeText,
  VerticalLine,
  ScrollText,
  FlexWrapper,
  ScrollElement
} from "./LandingPage.styles";
import { LandingPageProps } from "./types";
import Bubble from "../../components/Bubble";
import { config, useTransition } from "react-spring";

const LandingPage: FC<LandingPageProps> = ({ history }) => {
  const handleScroll = () => {
    const body = document.querySelector("body") as any;
    body.style.position = "fixed";
    history.push("/surveys");
  };

  const text = "Welcome to Surrrvey App!";

  const transitions = useTransition(text, null, {
    from: { transform: "translate3d(0,-10%,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: { transform: "translate3d(-100%,0,0)", opacity: 0 },
    reset: true,
    config: config.slow
  });

  return (
    <Container className="landing-page" onWheel={handleScroll}>
      {transitions.map(({ item, props }) => (
        <WelcomeText key={item} style={props}>
          {item}
        </WelcomeText>
      ))}
      <FlexWrapper>
        <ScrollElement>
          <ScrollText>Scroll</ScrollText>
          <VerticalLine />
        </ScrollElement>
      </FlexWrapper>
      <Bubble />
    </Container>
  );
};

export default LandingPage;
