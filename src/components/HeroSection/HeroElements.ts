import styled from "styled-components"


export const Container = styled.div`
  
  justify-content: center;

  background: #14213D;
  display: flex;
  justify-content: center;
  align-items: center;
  
  height:820px;

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
  
  div{
    width: 750px;
  }
  

`
export const HeroTitle = styled.p`
  color: #fff;
  font-size:35px;
  margin-left: 15%;
  align-self: start;
  
  
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

//IS NOT USED

// export const HeroContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
//   height:800px;
//   /* position: relative; */
  
  
// `


// export const HeroBg = styled.div` // This is div of Img
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
  
// `

// export const HeroBackground = styled.img` // Bk of
//   width: 100%;
//   height:860px;
  
//   background: #3424;
// `