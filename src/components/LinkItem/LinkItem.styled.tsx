import styled from "@emotion/styled";
import { Props } from "../../types";

export const SocoalListItem = styled.li`
  width: 36px;
  height: 36px;
`;

export const SocialListLink = styled.a<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.white};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const SocialLinkIcon = styled.svg`
  fill: currentColor;
`;
