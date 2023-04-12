import styled from "@emotion/styled";
import { Props } from "../../types";

export const Card = styled.li`
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eaeaea;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PictureThumb = styled.div`
  position: relative;
  padding: 0 0 80% 0;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 25px;
  height: 100%;
`;

export const CardTitle = styled.h3<Props>`
  flex-grow: 1;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 1.5;
  font-weight: ${(props) => props.theme.fontWeigths.bold};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const CardDescription = styled.p`
  height: 96px;
  font-family: "Nunito", sans-serif;
`;
