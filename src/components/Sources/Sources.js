import React from 'react';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText, BoxLink } from './SourcesStyles';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';


const data = [
  { title: "w3schools", source: "https://www.w3schools.com/", text: '*Základ pro Html a CSS. *Základ pro Html a CSS.'},
  { title: "DEV", source: "https://dev.to/", text: '*Komunitní forum s velkou základnou. '},
  { title: "learn2code", source: "https://learn2code.sk/", text: '*Slovenský portál, který mi pomohl začít s React. '},
  { title: "Spoustu jiných", source: "https://google.com", text: '*codepen, codrops, itnetwork,vzhurudolu... '}, 
];

const Sources = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Odkud čerpám</SectionTitle>
    <Boxes>
      {data.map((card, index, ) =>(
        <Box key={index}>
        <BoxLink  href={card.source}><FaExternalLinkSquareAlt size="1.7rem" /></BoxLink>     
          <BoxTitle >{card.title}</BoxTitle>           
          <BoxText >{card.text}</BoxText>   
                  
        </Box>
      ))}
    </Boxes>
   
  </Section>
);

export default Sources;