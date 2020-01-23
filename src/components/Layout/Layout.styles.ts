import styled from "styled-components";
import { breakPoints } from "../../styles/breakpoints";

export const LayoutContainer = styled.div`
  padding: 10rem;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: ${breakPoints.phone}) {
    padding: 10rem 2.5rem;
  }
`;
