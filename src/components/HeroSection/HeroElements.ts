import styled from "styled-components"

// export const HeroContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
//   height:800px;
//   /* position: relative; */
  
  
// `

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height:800px;

  



`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
`

export const HeroBack = styled.img`
  width: 100%;
  height: 100%;
  
  background: #232a34;
`

export const HeroContent = styled.div`
  /* z-index: auto; */
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  
  

`
export const HeroP1 = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 16px;
  align-self: start;
  
  
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 65px;
  text-align: center;
  display: flex;
  position: relative;

  
  p{
    color: #FCA311;
    font-size:65px;
   }

  @media screen and (max-width:960px){
    font-size: 40px;
  }

  @media screen and (max-width:480px){
    font-size: 32px;
  }


`
export const HeroP = styled.p`
  color: #fff;
  font-size: 35px;
  margin-top: 2px;
  margin-left: 16px;
  align-self: start;
  text-align: center;
  max-width: 600px;


  @media screen and (max-width:960px){
    font-size: 28px;
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
