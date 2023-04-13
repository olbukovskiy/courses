import React, { useState, useMemo } from "react";

import Container from "../../components/Container/Container";
import Searchbar from "../../components/SearchField/Searchbar";

import { directions, difficultyLevels, initialState } from "../../initialData";
import { ICourseCard } from "../../types";
import List from "../../components/List/List";
import CourseCard from "../../components/CourseCard/CourseCard";
import {
  CardsList,
  CoursesHeading,
  CoursesSection,
  Thumb,
} from "./Courses.styled";
import BadRequest from "../../components/BadRequest/BadRequest";

const Courses = () => {
  const [courses] = useState<ICourseCard[]>(initialState);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const difficultyChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficulty(event.target.value);
  };

  const categoriesChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const visibleCourses = useMemo(() => {
    let filteredCourses = courses.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    if (category.toLowerCase() !== "all") {
      filteredCourses = filteredCourses.filter((item) => {
        return item.direction.toLowerCase() === category.toLowerCase();
      });
    }

    if (difficulty.toLowerCase() !== "all") {
      filteredCourses = filteredCourses.filter(
        (item) => item.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    return filteredCourses;
  }, [courses, searchQuery, category, difficulty]);

  console.log(visibleCourses);

  return (
    <CoursesSection>
      <Container>
        <Thumb>
          <CoursesHeading>Our Courses</CoursesHeading>
          <Searchbar
            onSearchChange={submitHandler}
            onDifficultyChange={difficultyChangeHandler}
            onCategoryChange={categoriesChangeHandler}
            difficultyLevels={difficultyLevels}
            directions={directions}
            category={category}
            difficulty={difficulty}
            searchQuery={searchQuery}
          />
          <List
            items={visibleCourses}
            renderItem={(item: ICourseCard) => (
              <CourseCard searchQuery={searchQuery} {...item} key={item.src} />
            )}
            list={CardsList}
          />
          {visibleCourses.length === 0 && <BadRequest />}
        </Thumb>
      </Container>
    </CoursesSection>
  );
};

export default Courses;
