import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  border: 2px solid #111827;
  border-radius: 12px;
  weight:100%;
  background: ${props => props.theme.colors.background3};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
  &:hover{
    transition-duration: 0.3s;
    transform:translateY(-3px);
    border: 2px solid ${props => props.theme.colors.primary2};
  }
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 13px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 17px;
    line-height: 26px;
}
`
export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.primary1};

  @media ${props => props.theme.breakpoints.md}{
    font-size: 10px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 9px;
    line-height: 14px;
  }
`

export const BoxLink = styled.a`
color: ${props => props.theme.colors.text1};
font-size: 2rem;
float: right;

`
