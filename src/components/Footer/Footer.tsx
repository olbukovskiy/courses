import { useState } from "react";

import sprite from "../../assets/images/icons.svg";
import { ILinkItem } from "../../types";

import Container from "../Container/Container";
import {
  Footer,
  FooterText,
  FooterThumb,
  Heading,
  SocialList,
  SocialThumb,
} from "./Footer.styled";
import List from "../List/List";
import LinkItem from "../LinkItem/LinkItem";

const initialState: ILinkItem[] = [
  {
    href: "https://www.instagram.com/",
    icon: `${sprite}#icon-instagram`,
  },
  {
    href: "https://twitter.com/home?lang=uk",
    icon: `${sprite}#icon-twitter`,
  },
  {
    href: "https://www.facebook.com/",
    icon: `${sprite}#icon-facebook`,
  },

  {
    href: "https://www.linkedin.com/",
    icon: `${sprite}#icon-linkedin`,
  },
];

const FooterSection = () => {
  const [socialLinks] = useState(initialState);
  return (
    <Footer>
      <Container>
        <FooterThumb>
          <SocialThumb>
            <Heading>You can find us here</Heading>
            <List
              items={socialLinks}
              renderItem={(item) => (
                <LinkItem href={item.href} icon={item.icon} key={item.href} />
              )}
              list={SocialList}
            />
          </SocialThumb>
          <FooterText>
            © {new Date().getFullYear()} <span>EduSite.</span>, Inc. All rights
            reserved.
          </FooterText>
        </FooterThumb>
      </Container>
    </Footer>
  );
};
export default FooterSection;
