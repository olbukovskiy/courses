import styled from "@emotion/styled";
import { Props } from "../../types";

export const Footer = styled.footer<Props>`
  margin-top: auto;
  padding: 1.2rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;
`;

export const FooterText = styled.p<Props>`
  align-self: center;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
`;

export const FooterThumb = styled.div`
  display: flex;
  gap: 36px;
`;

export const SocialThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h2<Props>`
  align-self: flex-start;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 16px;
`;
