import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:christopher.gaynor6+portfolio@gmail.com">
            christopher.gaynor6@gmail.com
          </LinkItem>
          <LinkItem>Software Engineer </LinkItem>
        </LinkColumn>
      </LinkList>

      {/* <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer> */}
    </FooterWrapper>
  );
};

export default Footer;
