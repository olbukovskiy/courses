import sprite from "../../assets/images/icons.svg";
import Container from "../Container/Container";
import { BadRequestThumb, Heading } from "./BadRequest.styled";

const BadRequest = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Container>
        <BadRequestThumb>
          <Heading>Sorry, we have no search results</Heading>
          <svg width="328" height="290">
            <use href={`${sprite}#icon-success-image`}></use>
          </svg>
        </BadRequestThumb>
      </Container>
    </div>
  );
};

export default BadRequest;
