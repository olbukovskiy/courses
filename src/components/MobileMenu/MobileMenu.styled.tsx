import styled from "@emotion/styled";
import { Props } from "../../types";

export const Menu = styled.div<Props>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${(props) => (props.isOpen ? 0 : "-200%")});
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Blur = styled.div`
  position: absolute;
  left: 30%;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const MenuContent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 18px 12px;

  width: 30%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const MenuHeading = styled.h2<Props>`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  line-height: 1.6;
  color: ${(props) => props.theme.colors.black};
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;

export const Burger = styled.div<Props>`
  position: relative;
  display: block;
  width: 20px;
  height: 12px;
  z-index: 10;

  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.black};

    transition: background-color 0ms ease-out, transform 500ms ease-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &::before {
    top: ${(props) => (props.isOpen ? "5.5px" : 0)};
    transform: rotate(${(props) => (props.isOpen ? "45deg" : 0)});
  }

  &::after {
    bottom: ${(props) => (props.isOpen ? "5.5px" : 0)};
    transform: rotate(${(props) => (props.isOpen ? "-45deg" : 0)});
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Particle = styled.span<Props>`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 1px;

  background-color: ${(props) => props.theme.colors.black};

  opacity: ${(props) => (props.isOpen ? 0 : 1)};

  transition: opacity 500ms ease-out;
`;
