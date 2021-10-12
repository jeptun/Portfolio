import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';
import { projects } from '../../constants/constants';



const Projects = () => (
 <Section nopadding id="projects">

  <SectionTitle main>Projects</SectionTitle>

  {/*Pole s obrázky komponent/constants/constants */}
  <GridContainer>
    {projects.map(({ id, image, title, description, tags, source, visit}) => (
      <BlogCard key={id}>
        <Img src={image} />
          <HeaderThree title={title}>{title}</HeaderThree>
        <CardInfo>{description}</CardInfo>
        <div>
        <br />
        <Hr />
          <TagList>
            {tags.map((tag, i) =>(
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit}> <AiFillGithub size="1.7rem" /> Code</ExternalLinks>
          <ExternalLinks href={source}><AiFillPlayCircle size="1.7rem" /> Demo</ExternalLinks>
        </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
 </Section>
);

export default Projects;