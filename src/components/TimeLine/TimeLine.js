import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>My Story</SectionTitle>
      <SectionText>
        I consider myself a creative person and thats why I like coding, because
        anything that I have an idea for I can create it. I started coding after
        I had shoulder surgery when I was 18, I couldn't do much else. Coding
        was the perfect hobby for sitting on my 🍑.
      </SectionText>
      <SectionText>
        After Highschool I ended up going to community college for a year while
        working at Starbucks and then transferred to ASU online through
        Starbucks' tuition reimbursement program. History repeated itself, I got
        injured again and dicided to take a break from school. So, I ended up
        going to a coding bootcamp called The Tech Academy in Portland, OR.
        After completing extensive coursework I graduated in June 2018 and
        started my first dev job in July 2018 as an instructor at The Tech
        Academy. I taught full-stack web development there until I was hired as
        a developer on a contract working on a late stage project for the state.
        After that was over I was hired as a full-stack developer at a company
        called OnPoint Community Credit Union(OCCU). I worked there for just
        under 3 years using C#, .Net Core, Javascript, and SQL Server for
        application development everyday. After I left OCCU I took some time off
        amid the pandemic and then started working on my own projects and
        learning new technologies that I can be used to build better software.
        Now, Im looking for a new opportunity to work with a team of developers
        that are passionate about what they do and are looking to make a
        positive impact in the world.
      </SectionText>
      <SectionText>
        Outside of coding, I am passionate about music. I'm a huge fan of
        chillstep, it's timeless. I listen to loads of comedy podcasts, Joey
        diaz is TREMENDOUS! Also, spending time in nature with my aussie is a
        beautiful thing &#127925; &#127794;
      </SectionText>
    </Section>
  );
};

export default Timeline;
