import React from "react";
import { useTrail, animated } from "react-spring";
import { StyledBubble } from "./Bubble.styles";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Bubble = () => {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? fast : slow)
  }));

  const handleMouseMove = e => {
    set({ xy: [e.clientX, e.clientY] });
  };
  return (
    <>
      <StyledBubble>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div className="hooks-main" onMouseMove={handleMouseMove}>
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.interpolate(trans) }}
            />
          ))}
        </div>
      </StyledBubble>
    </>
  );
};

export default Bubble;
