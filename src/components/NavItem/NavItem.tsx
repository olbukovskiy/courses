import React from "react";
import { INavItem } from "../../types";
import { NavItemLink } from "./NavItem.styled";

type propType = {
  onClose?: () => void;
};

const NavItem: React.FunctionComponent<INavItem & propType> = ({
  link,
  content,
  onClose,
}) => {
  return (
    <li>
      <NavItemLink onClick={onClose} to={link}>
        {content}
      </NavItemLink>
    </li>
  );
};

export default React.memo(NavItem);
