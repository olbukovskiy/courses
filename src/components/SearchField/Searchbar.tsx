import React from "react";
import { upperCaseFirstLetter } from "../../helpers";
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchFormSelect,
  SearchFormThumb,
  SearchIcon,
} from "./Searchbar.styled";

type Props = {
  searchQuery: string;
  difficultyLevels: string[];
  directions: string[];
  category: string;
  difficulty: string;
  onSearchChange: (searchQuery: React.ChangeEvent<HTMLInputElement>) => void;
  onDifficultyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Searchbar: React.FunctionComponent<Props> = ({
  searchQuery,
  difficultyLevels,
  directions,
  onSearchChange,
  onCategoryChange,
  onDifficultyChange,
  category,
  difficulty,
}) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <SearchForm>
        <SearchFormThumb>
          <SearchFormButton>
            <SearchIcon />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            onChange={onSearchChange}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search couse by keyword"
            value={searchQuery}
            name="searchField"
          ></SearchFormInput>
        </SearchFormThumb>
        <SearchFormThumb>
          <SearchFormSelect
            onChange={onCategoryChange}
            as="select"
            name="category"
            value={category}
          >
            {directions.map((direction, index) => (
              <option value={direction} key={index}>
                {upperCaseFirstLetter(direction)}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormThumb>
        <SearchFormThumb>
          <SearchFormSelect
            onChange={onDifficultyChange}
            as="select"
            name="difficulty"
            value={difficulty}
          >
            {difficultyLevels.map((level, index) => (
              <option value={level} key={index}>
                {upperCaseFirstLetter(level)}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormThumb>
      </SearchForm>
    </div>
  );
};

export default Searchbar;
