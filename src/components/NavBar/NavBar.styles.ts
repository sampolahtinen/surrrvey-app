import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { breakPoints } from "../../styles/breakpoints";

export const StyledNavLink = styled(NavLink)`
  color: ${colors.darkLila};
  font-family: "Varela", sans-serif;
  font-weight: 600;
  transition: all 300ms;
  text-shadow: 0px 5px 15px rgba(0, 181, 255, 0.4),
    0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
  &:hover {
    color: ${colors.lila};
    transform: scale(1.15);
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  padding: 5rem 10rem;
  @media (max-width: ${breakPoints.phone}) {
    padding: 5rem 2.5rem;
  }
`;
