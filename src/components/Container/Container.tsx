import React from "react";
import { ContainerBox } from "./Container.styled";

type Props = {
  children: React.ReactNode;
};

const Container: React.FunctionComponent<Props> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

export default Container;
