import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { DiYii } from "react-icons/di";
import { GiAbstract107 } from "react-icons/gi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <GiAbstract107 size="5rem" style={{ color: "goldenrod" }} />{" "}
          <Span>Chrisgo</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ChrispyCodes">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Chrisg0o">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
