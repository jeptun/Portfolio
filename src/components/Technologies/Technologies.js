import React from 'react';
import { SiVisualstudiocode, SiJavascript, SiMongodb, SiHtml5, SiTailwindcss  } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologie</SectionTitle>
  <SectionText>
    Je vícero technologii, které rád zkouším ve svých projektech. O některých můžu říci že už trochu vím ostatní se postupně
    učím a různě nasazuji do provozu. Postupem času jsem si oblíbyl Tailwind Css pro pěknou dokumentaci a rychlé použití. Ale pro testování
    aplikací v React.js jsou použíté Material-UI nebo styled-components. Různorodější projekty v rámci zkoušení React knihovny přes různé tutorialy a lekce
    jsem se dostal i lehce k back-and části. A to konkrétně k MongoDB a Node.js. Ale u JavaScriptu si zatím nejsem moc jistý a proto se mu chci i nadále věnovat.
    Mezi dálší spíše animační frameworky bych se rád zajímal o Gsap či Three.js. Jako grafický tools používámm Figma pro grafiku či návrhy a Affinity pro úpravu fotek.

  </SectionText>
  <List>
    <ListItem>
    <div style={{display: 'flex'}} > 
      <SiHtml5 size="3rem" /><SiTailwindcss size="3rem" /> 
      </div>
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Zkušenost s<br />
          HTML, CSS, Tailwind.
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
    <div style={{display: 'flex'}} > 
      <SiJavascript size="3rem" /><SiMongodb size="3rem" /> 
      </div>
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Povědomí o JS<br />
          Node.js a MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
    <div style={{display: 'flex'}} > 
    <SiVisualstudiocode size="3rem" /><CgFigma size="3rem" /> 
      </div>      
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
        IDE & Grafický editor<br />
        VS Code, Figma...
        </ListParagraph>
      </ListContainer>
    </ListItem>
    
  </List>
 </Section>
);

export default Technologies;