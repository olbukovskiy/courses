import {
  Card,
  CardBox,
  CardDescription,
  CardLink,
  CardTitle,
  PictureThumb,
} from "./CourseCard.styled";

type Props = {
  src: string;
  alt: string;
  title: string;
  descr: string;
};

const CourseCard: React.FunctionComponent<Props> = ({
  src,
  alt,
  title,
  descr,
}) => {
  return (
    <Card>
      <CardLink>
        <PictureThumb>
          <img src={src} alt={alt} />
        </PictureThumb>
        <CardBox>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{descr}</CardDescription>
        </CardBox>
      </CardLink>
    </Card>
  );
};

export default CourseCard;
