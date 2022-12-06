import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, SpanText } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, <br /> I'm <SpanText>Chris</SpanText> &#9996;
      </SectionTitle>
      <SectionText>
        A Software Engineer that likes to build things with modern tools.
      </SectionText>
      <Button target="_blank" onClick={() => (window.location = "/Resume.pdf")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
