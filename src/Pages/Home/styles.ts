import styled from "styled-components"
import img from '../../assets/images/background.jpg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${img});

`


export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;


  div{
    width: 800px;
  }
  

`
export const HeroTitle = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 15%;
  align-self: start;
  

  @media screen and (max-width:960px){
    font-size: 28px;
    align-self: center;
    margin-right: 110px;
  }

  @media screen and (max-width:480px){
    font-size: 23px;
  }
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 65px;
  text-align: center;
  display: flex;
  position: relative;
  width: auto;
  
 

  @media screen and (max-width:960px){
    font-size: 40px;
    display: flex;
    align-items: center;

  }

  @media screen and (max-width:480px){
    font-size: 32px;
  }


`
export const HeroP = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 15%;
  align-self: start;


  @media screen and (max-width:960px){
    font-size: 28px;
    align-self: center;
    margin-right: 110px;

  }

  @media screen and (max-width:480px){
    font-size: 23px;
  }

`

export const HeroBtnWrapper = styled.div`
 margin-top: 32px;
 display: flex;
 flex-direction: column;
 align-items: center;


`
export const Button = styled.button`
border-radius: 16px;
height: 40px;
width: 200px;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
border: solid 2px;
border-color: #FCA311;
background: transparent;
color: #FCA311;
cursor: pointer;
transition : filter 0.2s;


&:hover{
  filter: brightness(0.8);
  color: #fff;
  border-color: #fff;
}

`

// FOOTER CODE

export const FooterContainer = styled.footer` 
/* background: #14213D; */
background: transparent;
display: flex;
justify-content: center;
width: 100vw;

height: 70px;
z-index: 1;
margin-top: auto;






`

export const FooterText = styled.div`
color: #fff;
font-size: 24px;
display: flex;
align-items: center;
text-decoration: underline;

`

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  gap: 25px;

`

export const HeroContainer = styled.div``
export const HeroBg = styled.div``
export const HeroBackground = styled.img``

