import React from "react";
import { ICourseCard } from "../../types";
import {
  Card,
  CardBox,
  CardDescription,
  CardLink,
  CardTitle,
  PictureThumb,
} from "./CourseCard.styled";
import { highlightSearchResults } from "../../helpers";

export type SearchProp = {
  searchQuery?: string;
};

const CourseCard: React.FunctionComponent<ICourseCard> = ({
  src,
  searchQuery,
  title,
  descr,
}) => {
  const highlightedTitle = highlightSearchResults(searchQuery as string, title);
  return (
    <Card>
      <CardLink>
        <PictureThumb>
          <img src={src} alt={title} />
        </PictureThumb>
        <CardBox>
          <CardTitle>{highlightedTitle}</CardTitle>
          <CardDescription>{descr}</CardDescription>
        </CardBox>
      </CardLink>
    </Card>
  );
};

export default React.memo(CourseCard);
