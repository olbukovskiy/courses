import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import { AiOutlineCloseCircle } from "react-icons/ai";

import IconBtn from "../IconBtn/IconBtn";
import { Backdrop, ModalEl } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root")! as HTMLDivElement;

declare global {
  interface WindowEventMap {
    keydown: React.KeyboardEvent<HTMLButtonElement>;
  }
}

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FunctionComponent<Props> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    enableBodyScroll(modalRef.current as HTMLDivElement);
    onClose();
  }, [onClose]);

  const onBackdropClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const onEscHandler = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    globalThis.addEventListener("keydown", onEscHandler);
    return () => window.removeEventListener("keydown", onEscHandler);
  }, [closeModal]);

  useEffect(() => {
    disableBodyScroll(modalRef.current as HTMLDivElement);

    return () => clearAllBodyScrollLocks();
  }, []);

  return createPortal(
    <Backdrop onClick={onBackdropClickHandler} ref={modalRef}>
      <ModalEl>
        <IconBtn onClick={closeModal}>
          <AiOutlineCloseCircle size="30px" />
        </IconBtn>
        {children}
      </ModalEl>
    </Backdrop>,
    modalRoot
  );
};
export default Modal;
