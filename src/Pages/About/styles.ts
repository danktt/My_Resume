import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: #131418;
`;

export const Div = styled.div`

  max-height: 900px;
  max-width: auto;
`;

export const AboutHeader = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;

  width: 100%;
  
  

  h2 {
    display: flex;
    align-content: center;
    justify-content: right;
    width: 10rem;
    font-family: "PT Sans Caption";
    color: #fca311;
    border-bottom: 2px solid #fca311;
    
    @media screen and (max-width:960px){
      font-size: 28px;
      align-self: center;
      margin-right: 110px;
    }

    @media screen and (max-width:480px){
      font-size: 23px;
      align-self: center;

    }
  }

  p {
    font-size: 5rem;
    font-family: "Poppins";
    color: #fff;
  }


`

export const AboutMain = styled.div`
  height: 55vh;
  /* padding-right: auto;
  padding-left: auto; */

  h2 {
    /* display: flex;
    justify-content: center; */
    color: #fff;
    font-size: 2.5rem;

    margin-bottom: 3rem;
    text-align: center;
 

    span {
      color: #fca311;
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
  }

  p {
    color: #fff;
    font-size: 25px;
    margin: 0 1rem 0 1rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const AboutFooter = styled.footer` 
  height: 10vh;
 font-size: 3rem;
 color: #fff;
 display: flex;
 justify-content: right;
 align-items: center;
 padding: 0 1rem;


  

background:aqua;
  div{
    background: #FCA311;
     width: 4rem;
     height: 4rem;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
  
     &:hover{
       filter: brightness(0.8);
     }

  }


`
