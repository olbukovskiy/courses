import { useState } from "react";
import { INavItem } from "../../types";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import { Header, Thumb } from "./AppBar.styled";

const initialState: INavItem[] = [
  { link: "/", content: "Home" },
  { link: "courses", content: "Courses" },
  { link: "about", content: "About Us" },
  { link: "contacts", content: "Contact Us" },
];

const AppBar = () => {
  const [navLinks] = useState<INavItem[]>(initialState);
  return (
    <Header>
      <Container>
        <Thumb>
          <Logo />
          <Navigation navLinks={navLinks} />
        </Thumb>
      </Container>
    </Header>
  );
};

export default AppBar;
