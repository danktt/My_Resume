import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: center;

  height: 100%; */
  background: #131418;
`

export const Div = styled.div`
  /* padding: 34px; */
  /* max-height: 900px;
  max-width: auto; */
  display: column;
  align-items: center;
  
`


export const EduacitonHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  
  div {
    
    display: flex;
    align-content: center;
    justify-content: right;
    width: 10rem;
    font-family: "PT Sans Caption";
    font-size: 1.9rem;
    color: #fca311;
    border-bottom: 1px solid #fca311;
  }

  p {
    font-size: 6.25rem;
    font-family: "Poppins";
    color: #fff;
  }
`


export const EduactionMain = styled.div`
  width: 1095px;
  height: 50vh;
  background: #14213D;
  border-radius: 1rem;
  margin: 2rem;
  

  header{
    display:column;
    justify-content: row;
    width: 100%;
    height: 25%;
    padding: .2rem;
    color: #FCA311;

    h1{
      display: flex;
      justify-content: center;
      color: #fff;
    }

    h2{
      margin-top: 1rem;
      display: flex;
      justify-content: center; 
      color: #fff;

    }
  }


`
export const EducationDiv = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  padding: 1rem;
  
  height: 70%;


  p{
    font-size:1.4rem;
    display: flex;
    align-items: center;
    padding:0 3rem;;
  }

  div{
    color: #FCA311;
    font-size: 4rem;
    
    display: flex;
    align-self: center;

    &:hover{
      filter: brightness(0.8);
    }
    
  }
`
export const EducationFooter = styled.footer`
  height: 5%;
  margin-top: auto;

  display: flex;
  justify-content: center;
  gap: 1rem;
  

  div {
    color: #FCA311;
  

    &:hover{
      filter: brightness(0.8);
    }
  }
`
export const Footer = styled.footer` 
 width: 100%;
 height: 10vh;
 font-size: 3rem;
 color: #fff;
 display: flex;
 justify-content: right;
 padding: 0 1rem;
 background: aqua;
 
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