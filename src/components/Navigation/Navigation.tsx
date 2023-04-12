import { useState } from "react";

import { INavItem } from "../../types";
import List from "../List/List";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavItem from "../NavItem/NavItem";
import { NavCont, NavList } from "./Navigation.styled";
import { Burger, Particle } from "../MobileMenu/MobileMenu.styled";

type Props = {
  navLinks: INavItem[];
};

const Navigation: React.FunctionComponent<Props> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <NavCont>
        <List
          list={NavList}
          items={navLinks}
          renderItem={({ link, content }: INavItem) => (
            <NavItem link={link} content={content} key={content} />
          )}
        />
      </NavCont>
      <Burger isOpen={isOpen} onClick={toggleMenuHandler}>
        <Particle isOpen={isOpen} />
      </Burger>
      {isOpen && (
        <MobileMenu
          onClose={toggleMenuHandler}
          isOpen={isOpen}
          navLinks={navLinks}
          heading="What do you want?"
        />
      )}
    </nav>
  );
};

export default Navigation;
