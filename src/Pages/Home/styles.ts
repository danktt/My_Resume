import { Link as LinkR } from "react-router-dom"
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
  max-width: 75rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
 

  div{
    width: 100vw;
  }
  

`
export const HeroTitle = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 25%;
  align-self: start;
  display: flex;
 
    div{
      width: 100%;
      margin-right: 100%;
    }
  
    @media screen and (max-width:960px){
      font-size: 28px;
      align-self: center;
      margin-right: 110px;
    }

    @media screen and (max-width:480px){
      font-size: 23px;
      align-self: center;

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
    text-align: center;

  }

  @media screen and (max-width:480px){
    font-size: 32px;
    align-self: center;

  }


`
export const HeroP = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 25%;
  align-self: start;


  @media screen and (max-width:960px){
    font-size: 28px;
    align-self: center;
    margin-right: 110px;

  }

  @media screen and (max-width:480px){
    font-size: 23px;
    text-align: center;

  }

`

export const HeroBtnWrapper = styled.div`
 margin-top: 32px;
 display: flex;
 flex-direction: column;
 align-items: center;
  
 div{
   display: flex;
   font-size: 1rem;
   background: grey;
   width: 1rem;
   height: 1rem;
   display: block;
   margin-right: auto;
   cursor: pointer;
   border-radius: .2rem;
   
 }

`
export const Button = styled(LinkR)`
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
text-decoration: none;


&:hover{
  filter: brightness(0.8);
  color: #fff;
  border-color: #fff;
}

`

// FOOTER CODE

export const FooterContainer = styled.footer` 
  
  /* display: flex;
  justify-content: center; */
  /*

  height: 70px;
  z-index: 1;
  */
  margin-top: auto;
  width: 100%;
  display: flex;

` 
export const FooterText = styled.div`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  width: 10rem;
  margin-right: auto;
 
  text-align: center;
  z-index:1;
  span{
    cursor: pointer;
    margin-right: 0.7rem;
    &:hover {
      color: #FCA311;
    }
  }

`

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  gap:  1.5rem;
  margin-left: -10rem;
  width: 100%;
  height: 2.5rem;
  

  a{
    color: #fff;
    &:hover {
      color: #FCA311;
    }
  }
`
