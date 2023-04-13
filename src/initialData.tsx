import { ICourseCard } from "./types";

export const initialState: ICourseCard[] = [
  {
    src: "https://s3-ap-southeast-2.amazonaws.com/geg-gug-webapp/images/1557364192-work_while_you_study_banner.jpg",
    title: "Frontend",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Beginner",
    direction: "JavaScript",
  },
  {
    src: "https://cdn.corporatefinanceinstitute.com/assets/10-Poor-Study-Habits-Opener.jpeg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Advanced",
    direction: "JavaScript",
  },
  {
    src: "https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/03/Blog-Image-50-750x536.jpg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Advanced",
    direction: "Java",
  },
  {
    src: "https://examstudyexpert.com/wp-content/uploads/2021/07/Reasons-why-pinboard-small-1024x724.jpg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Beginner",
    direction: "C++",
  },
  {
    src: "https://www.marketing91.com/wp-content/uploads/2020/10/Study-Skills.jpg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Advanced",
    direction: "QA",
  },
  {
    src: "https://www.theasianschool.net/blog/wp-content/uploads/2021/12/How-to-Study-More-in-Less-Time-for-Exams-1200x675.jpg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Intermediate",
    direction: "TypeScript",
  },
  {
    src: "https://thumbs.dreamstime.com/b/child-magnifying-glass-amazed-school-kid-student-boy-magn-magnifier-study-mathematics-math-education-92808672.jpg",
    title: "Lorem ipsum dolor",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quidem sequi a porro praesentium consequuntur harum enim, mollitia, voluptatum, possimus dolores eum odit. Saepe deleniti id quis rem. Maiores.",
    difficulty: "Intermediate",
    direction: "Python",
  },
];

export const difficultyLevels = ["all", "beginner", "intermediate", "advanced"];

export const directions = [
  "all",
  "JavaScript",
  "Java",
  "C++",
  "QA",
  "TypeScript",
  "Python",
];
