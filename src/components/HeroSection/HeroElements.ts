import styled from "styled-components"

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height:800px;
  /* position: relative; */
  
`

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
  

`
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width:960px){
    font-size: 40px;
  }

  @media screen and (max-width:480px){
    font-size: 32px;
  }


`
export const HeroP = styled.p`
  color: #fff;
  font-size:32px;
  margin-top: 2px;
  text-align: center;
  max-width: 600px;


  @media screen and (max-width:960px){
    font-size: 28px;
  }

  @media screen and (max-width:480px){
    font-size: 23px;
  }

`

