import styled from "@emotion/styled";
import { Props } from "../../types";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalEl = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 450px;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transform: translate(-50%, -50%) scale(1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 767px) {
    width: calc(100% - 30px);
    min-width: 320px;
    max-width: 450px;
  }

  @media screen and (min-width: 1200px) {
    width: 528px;
  }
`;
