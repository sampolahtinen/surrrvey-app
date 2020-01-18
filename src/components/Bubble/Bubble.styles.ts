import styled from "styled-components";

export const StyledBubble = styled.div`
  .hooks-main > svg {
    display: none;
  }

  .hooks-main > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: rgb(255, 222, 237);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  .hooks-main > div:nth-child(1) {
    width: 120px;
    height: 120px;
  }

  .hooks-main > div:nth-child(2) {
    width: 350px;
    height: 350px;
  }

  .hooks-main > div:nth-child(3) {
    width: 200px;
    height: 200px;
  }

  .hooks-main > div::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  .hooks-main > div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  .hooks-main > div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  .hooks-main {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url("#goo");
    overflow: hidden;
  }
`;
