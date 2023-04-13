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

export interface ICourseCard {
  searchQuery?: string;
  src: string;
  title: string;
  descr: string;
  difficulty: string;
  direction: string;
}
