import styled from "@emotion/styled";

export const NavCont = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
