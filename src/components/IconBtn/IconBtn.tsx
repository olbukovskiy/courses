import React from "react";
import { CloseBtn } from "./IconBtn.styled";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const IconBtn: React.FunctionComponent<Props> = ({ children, onClick }) => {
  return (
    <CloseBtn className="btn" type="button" onClick={onClick}>
      {children}
    </CloseBtn>
  );
};

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

export default IconBtn;
