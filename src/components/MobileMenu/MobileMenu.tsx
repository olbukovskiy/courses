import React from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import { INavItem } from "../../types";
import List from "../List/List";
import NavItem from "../NavItem/NavItem";
import {
  Blur,
  Menu,
  MenuContent,
  MenuHeading,
  MenuList,
} from "./MobileMenu.styled";

type Props = {
  navLinks: INavItem[];
  heading: string;
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FunctionComponent<Props> = ({
  navLinks,
  heading,
  isOpen,
  onClose,
}) => {
  const menuRef = React.useRef<HTMLDivElement>(null);

  const closeMenu = React.useCallback(() => {
    enableBodyScroll(menuRef.current as HTMLDivElement);
    onClose();
  }, [onClose]);

  React.useEffect(() => {
    disableBodyScroll(menuRef.current as HTMLDivElement);

    return () => clearAllBodyScrollLocks();
  }, []);

  return (
    <Menu isOpen={isOpen} ref={menuRef}>
      <Blur onClick={closeMenu} />
      <MenuContent isOpen={isOpen}>
        <MenuHeading>{heading}</MenuHeading>
        <List
          list={MenuList}
          items={navLinks}
          renderItem={({ link, content }: INavItem) => (
            <NavItem
              link={link}
              content={content}
              onClose={closeMenu}
              key={content}
            />
          )}
        />
      </MenuContent>
    </Menu>
  );
};

export default MobileMenu;
