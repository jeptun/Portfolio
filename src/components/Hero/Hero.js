import React from 'react';
import Link from 'next/link';
import { NavLink } from '../Header/HeaderStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Ahoj, <br />
      jsem Josef <br />
     junior developer!
    </SectionTitle>
    <SectionText>
    Rád vytvářím UI & Webové aplikace za pomocí různých komponentů. Snažím se navrhnout příjemný či zábavný design, který bude moderní a zároveň fuknční. Momentálně se snažím naplno naučit a využít javascript ruku v ruce s knihovnou React.js, spoulu s dalšímí užitečnými pomocníky.
    </SectionText>
    <Link href="#projects">
        <NavLink> <Button>Jít dál!</Button> </NavLink>
       </Link>
  </LeftSection>
 </Section>
);

export default Hero;