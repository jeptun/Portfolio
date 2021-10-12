import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:pepadosou@gmail.com">pepadosou@gmail.com</LinkItem>
        <LinkItem href="mailto:jeptun@gmail.com">jeptun@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Tel</LinkTitle>
        <LinkItem href="tel: +420 602 777 815">+420 602 777 815</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Power by <FaReact/></Slogan>
      </CompanyContainer>
      <SocialContainer>
     <SocialIcons href="https://github.com/jeptun/Portfolio">
        <AiFillGithub size="3rem" />
     </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;