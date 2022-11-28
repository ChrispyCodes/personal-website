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
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I consider myself a creative person and thats why I like coding, because
        anything that I have an idea for I can create it. I started coding after
        I had shoulder surgery when I was 18, I couldn't do much else. Coding
        was the perfect hobby for sitting on my 🍑.
      </SectionText>
      <SectionText>
        Why do I code now? My aim is to make a positive impact in peoples
        lives...building software that adds a bit of joy to life rather than
        robbing you of it. Outside of coding, I am passionate about music. I'm a
        huge fan of chillstep, its timeless. I listen to loads of comedy
        podcasts, Joey diaz is TREMENDOUS! Also, spending time in nature with my
        aussie is a beautiful thing &#127925; &#127794;
      </SectionText>
    </Section>
  );
};

export default Timeline;
