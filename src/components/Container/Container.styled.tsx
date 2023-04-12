import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
