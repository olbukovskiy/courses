import styled from "@emotion/styled";

export const CoursesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 42px 0;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 45px;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CoursesHeading = styled.h2`
  font-size: 32px;
  line-height: 2;
  text-transform: uppercase;
`;
