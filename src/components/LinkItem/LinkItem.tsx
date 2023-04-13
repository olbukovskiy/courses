import React from "react";
import { ILinkItem } from "../../types";
import {
  SocialLinkIcon,
  SocialListLink,
  SocoalListItem,
} from "./LinkItem.styled";

const LinkItem: React.FunctionComponent<ILinkItem> = ({ href, icon }) => {
  return (
    <SocoalListItem>
      <SocialListLink href={href} target="_blank">
        <SocialLinkIcon width="20" height="20">
          <use href={icon}></use>
        </SocialLinkIcon>
      </SocialListLink>
    </SocoalListItem>
  );
};

export default React.memo(LinkItem);
