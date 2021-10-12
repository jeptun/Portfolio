import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`
export const BgImg = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  
&:hover{
  -webkit-transform:rotate(90deg);
  -ms-transform:rotate(90deg);
  transform:rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
          filter:hue-rotate(90deg);
  -webkit-transition-duration: 1.3s;
  -o-transition-duration: 1.3s;
          transition-duration: 1.3s;
}
`
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  
}

`
export const BlogCard = styled.div`
  border-radius: 0.4rem;
  background: ${props => props.theme.colors.background3};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover{
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
  transition-duration: 0.3s;
  
}
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: ${props => props.theme.colors.text3};
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  padding: 1.5rem 0;
  margin-bottom: 25px;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  color: ${props => props.theme.colors.text1};
  border-bottom: 1px solid ${props => props.theme.colors.text3};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 5px auto;
  border: 0;
  background:  ${props => props.theme.colors.primary2};
  
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 5.125rem;
  color: ${props => props.theme.colors.text1};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem 
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: ${props => props.theme.colors.text1};
font-size: 1.8rem;
padding:1rem 1.5rem;
background-color: white;
border: 1px solid #111827;
border-radius: 0.5rem;
transition: 0.2s;
&:hover{
  border: 1px solid ${props => props.theme.colors.primary2};
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: ${props => props.theme.colors.text1};
font-size: 1.7rem;
`