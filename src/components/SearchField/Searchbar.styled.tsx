import styled from "@emotion/styled";
import { GoSearch } from "react-icons/go";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: #fff;

  overflow: hidden;
`;

export const SearchFormThumb = styled.div`
  display: flex;

  height: 48px;
  width: 100%;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
`;

export const SearchFormButton = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  cursor: default;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border-color: transparent;

  padding-left: 4px;
  padding-right: 4px;

  &:focus {
    border-color: transparent;
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormSelect = styled.select`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border-color: transparent;

  padding-left: 4px;
  padding-right: 4px;

  &:focus {
    border-color: transparent;
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
