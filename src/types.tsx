import { ThemeType } from "./theme";

export type Props = {
  theme?: ThemeType;
  isOpen?: boolean;
};

export interface INavItem {
  link: string;
  content: string;
}

export interface ILinkItem {
  href: string;
  icon: string;
}
