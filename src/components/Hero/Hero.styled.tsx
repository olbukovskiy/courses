import styled from "@emotion/styled";
import { Props } from "../../types";

import pic from "../../assets/images/background.jpg";

export const Hero = styled.section<Props>`
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.colors.heroBg};

  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${pic});
`;

export const HeroThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const HeroHeading = styled.h1<Props>`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;
`;

export const HeroButton = styled.button<Props>`
  display: block;
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;

  font-weight: ${(props) => props.theme.fontWeigths.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 1.8;
  text-align: center;
  letter-spacing: 0.06em;

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px 20px;
`;

export const FormLabel = styled.p<Props>`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme.colors.black};

  margin-bottom: 12px;

  @media screen and (min-width: 1200px) {
    line-height: 1.15;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-bottom: 40px;
`;

export const Checkbox = styled.input<Props>`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='16' height='15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m3.957 7.752-.069-.066-.069.065-.888.842-.076.072.076.073 3.496 3.334.069.066.069-.066 7.504-7.158.076-.073-.076-.072-.882-.841-.069-.066-.069.066-6.553 6.246-2.539-2.422Z' fill='%23fff' stroke='%23fff' stroke-width='.2'/%3E%3C/svg%3E");
    background-color: ${(props) => props.theme.colors.blue};
    background-size: contain;
    background-origin: border-box;
    border-color: transparent;
  }
`;

export const Icon = styled.span<Props>`
  display: inline-block;
  width: 16px;
  height: 15px;
  margin-right: 7px;

  border: 2px solid #212121;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};

  transition-property: background-color, border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0;

  @media screen and (max-width: 1199px) {
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const AgreementText = styled.span<Props>`
  text-decoration-line: underline;
  color: ${(props) => props.theme.colors.blue};

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const ModalCont = styled.div`
  margin-bottom: 26px;
`;

export const ModalContLabel = styled.label`
  display: block;

  font-size: 16px;
  line-height: 1.17;
  letter-spacing: 0.01em;

  margin-bottom: 8px;
`;

export const ModalContThumb = styled.div`
  display: flex;
  position: relative;
`;

export const TextAreaThumb = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled.input<Props>`
  width: 100%;
  height: 40px;
  padding-left: 42px;
  padding-right: 12px;
  border-radius: 4px;
  border: 1px solid;
  border-color: $input-border-color;
  outline: transparent;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:focus + .icon,
  &:focus {
    fill: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
  }
`;

export const Textarea = styled.textarea<Props>`
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  resize: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  outline: transparent;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: ${(props) => props.theme.colors.placeholder};

    transition: font-size, line-height;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus::placeholder {
    font-size: 14px;
    line-height: 1.14;
  }

  &:focus {
    fill: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
  }
`;

export const ModalCloseIcon = styled.svg`
  fill: currentColor;
  display: block;
`;

export const ModalInputIcon = styled.svg`
  display: block;
  position: absolute;

  fill: #212121;

  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;
