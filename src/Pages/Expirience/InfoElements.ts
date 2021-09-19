import styled from "styled-components";

export const Container = styled.div`

`

export const Div = styled.div`
background: #131418;
height: 100vh;
`

export const ExperienceHeader = styled.header`
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
  }

  p {
    font-size: 5rem;
    font-family: "Poppins";
    color: #fff;
  }
`
export const ExperienceMain = styled.div`

  height: 55vh;
  display: flex;
  justify-content: center;
  color: #fff;
  
  
  div{
    margin-bottom: 2rem;
    width: 70rem;
    height: 8.3rem;
    border-radius:0  1rem 1rem 1rem;
    padding: 0.2rem 1rem;
    background: #14213D;
    
    header {
      display: flex;
      justify-content: space-between;

      span{
        color: #fca311;
      }
    }

    main{
      text-align: center;
    }
  }


`




export const ExperienceFooter = styled.footer`
  height: 10vh;
 font-size: 3rem;
 color: #fff;
 display: flex;
 justify-content: right;
 align-items: center;
 padding: 0 1rem;


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