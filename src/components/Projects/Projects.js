import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Image src={image} alt="project picture" width={400} height={200} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            {/* <CardInfo>{description}</CardInfo> */}
            {/* <div>
            
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div> */}
            <UtilityList>
              <SocialIcons href={visit} aria-label="project link">
                <AiOutlineLink size="3rem" />
              </SocialIcons>
              <SocialIcons href={source} aria-label="github link">
                <AiFillGithub size="3rem" />
              </SocialIcons>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
