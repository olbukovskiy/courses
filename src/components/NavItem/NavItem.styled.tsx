import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Props } from "../../types";

export const NavItemLink = styled(NavLink)<Props>`
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0;

  font-family: "Nunito", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  line-height: 1.5;
  cursor: pointer;

  color: ${(props) => props.theme.colors.black};

  border-radius: 10px;
  border-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    position: relative;
    color: ${(props) => props.theme.colors.hover};
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.hover};
  }
`;
