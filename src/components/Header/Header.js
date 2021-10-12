import React from 'react';
import Link from 'next/link';
import { AiFillGithub,} from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, } from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href="https://github.com/jeptun">
      <a style={{display: 'flex', alignItems:'center', color:'#111827', marginBottom: '20px', fontSize: '2.2rem' }}>
      J.DOS
      </a>
     </Link>
   </Div1>
   <Div2>
     <li>
       <Link href="#projects">
        <NavLink>Projekty</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#tech">
        <NavLink>Technologie</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#about">
        <NavLink>O mě</NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href="https://github.com/jeptun">
        <AiFillGithub size="3rem" />
     </SocialIcons>
   </Div3>
 </Container>
);

export default Header;