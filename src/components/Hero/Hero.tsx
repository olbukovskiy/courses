import { useState } from "react";

import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import sprite from "../../assets/images/icons.svg";
import {
  AgreementText,
  Checkbox,
  CheckboxLabel,
  FormField,
  FormLabel,
  Hero,
  HeroButton,
  HeroHeading,
  HeroThumb,
  Icon,
  ModalCont,
  ModalContLabel,
  ModalContThumb,
  ModalInput,
  ModalInputIcon,
  Text,
  Textarea,
} from "./Hero.styled";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Hero>
      <Container>
        <HeroThumb>
          <HeroHeading>Welcome to EduSite</HeroHeading>
          <HeroButton onClick={toggleModal}>Order a service</HeroButton>
          {isOpen && (
            <Modal onClose={toggleModal}>
              <form>
                <FormField role="group" aria-labelledby="modal-form-label">
                  <FormLabel id="modal-form-label">
                    Leave your details and we will call you back
                  </FormLabel>
                  <ModalCont>
                    <ModalContLabel>Name</ModalContLabel>
                    <ModalContThumb>
                      <ModalInput type="text" name="name" />
                      <ModalInputIcon className="icon" width="18" height="18">
                        <use href={`${sprite}#icon-person-black`}></use>
                      </ModalInputIcon>
                    </ModalContThumb>
                  </ModalCont>
                  <ModalCont>
                    <ModalContLabel>Phone number</ModalContLabel>
                    <ModalContThumb>
                      <ModalInput type="tel" name="tel" />
                      <ModalInputIcon className="icon" width="18" height="18">
                        <use href={`${sprite}#icon-phone-black`}></use>
                      </ModalInputIcon>
                    </ModalContThumb>
                  </ModalCont>
                  <ModalCont>
                    <ModalContLabel>Email</ModalContLabel>
                    <ModalContThumb>
                      <ModalInput type="email" name="email" />
                      <ModalInputIcon className="icon" width="18" height="18">
                        <use href={`${sprite}#icon-email-black`}></use>
                      </ModalInputIcon>
                    </ModalContThumb>
                  </ModalCont>
                  <ModalCont>
                    <ModalContLabel>
                      <ModalContLabel>Comment</ModalContLabel>
                      <ModalContThumb>
                        <Textarea
                          name="comment"
                          cols={30}
                          rows={10}
                          placeholder="Enter tour text"
                          id="comment"
                        />
                      </ModalContThumb>
                    </ModalContLabel>
                  </ModalCont>
                  <CheckboxLabel>
                    <Checkbox type="checkbox" name="agreement" value="agree" />
                    <Icon className="icon"></Icon>
                    <Text>
                      I agree to the newsletter and accept the
                      <AgreementText>terms of the contract</AgreementText>
                    </Text>
                  </CheckboxLabel>
                  <HeroButton type="submit">Отправить</HeroButton>
                </FormField>
              </form>
            </Modal>
          )}
        </HeroThumb>
      </Container>
    </Hero>
  );
};

export default HeroSection;
