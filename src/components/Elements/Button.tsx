import styled from "styled-components";
import { colors } from "../../styles/colors";

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
