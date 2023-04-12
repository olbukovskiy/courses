import React from "react";
import { Formik } from "formik";

import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchIcon,
} from "./Searchbar.styled";

const initialValues = { searchField: "" };

type Props = {
  onSubmit: (searchQuery: string) => void;
};

const Searchbar: React.FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values.searchField);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => {
        return (
          <SearchbarContainer>
            <SearchForm>
              <SearchFormButton type="submit" disabled={isSubmitting}>
                <SearchIcon />
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
              </SearchFormButton>
              <SearchFormInput
                type="search"
                autoComplete="off"
                autoFocus
                placeholder="Search couse by keyword"
                name="searchField"
              ></SearchFormInput>
            </SearchForm>
          </SearchbarContainer>
        );
      }}
    </Formik>
  );
};

export default Searchbar;
