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
  display: flex;
  justify-content: center;
  height: 55vh;
  gap: 4rem;
  padding:0 0 3rem 0 ;
`

export const SectionFirst = styled.section`
  width: 30.2rem;
  background: #14213D;
  border-radius: 1rem;
  


  header {
    text-align: center;
    background : #fff;
  }

  div{
    margin-top:2.3rem;
    color: #fff;
    text-align: center;

    h1{
      font-family: "Poppins";
      color: #fca311;
      font-size: 1.2rem;
    }
    p{
      font-family: "Poppins";
      font-size: 1rem;
      margin-bottom: 2rem;

    }

    span {
      font-size: 1rem;
    }

    div{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      color: #FCA311;
      gap: 1rem;
      
      div{
        &:hover {
        color: #fff;
    }
  }
    }
  }

`
export const SectionSecond = styled.section`
  width: 30.2rem;
  /* background: #14213D; */
  border-radius: 1rem;  
  background: transparent;
  /* display: column; */
  margin-bottom: 1rem;

  h1{
    margin-bottom: 2rem;
    color: #fff;
    text-align: center;
    span{
      color: #FCA311;

    }
  }

  input{
    color: #fff;
    background: transparent;
    margin-bottom: .1rem;
    width:100%;
    height: 2rem;
    border-radius: 0.2rem;
  }

  textarea {
    color: #fff;
    background: transparent;
    margin-bottom: 1rem;
    width:30.2rem; 
    height: 9rem; 
    text-decoration: none;
    border-radius: 0.2rem;
    resize: none;
  }
 
  
`

export const RobotDiv = styled.div`
    height: 3rem;
    width: 100%;
    background: grey;

    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    border-radius: 0.2rem;
`
export const SideBtnWrap = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  
`
export const SidebarRouter = styled.button`
background: #FCA311;
border-radius: 2rem;
width: 100%;
height: 4rem; 
border-style: none;
`

export const ContactFooter = styled.footer`
background: #14213D;
/* display: flex; */
display: flex;
height: 10vh;
align-items: center;

`

export const ContactDiv = styled.div`
  text-align: center;
  margin-left: auto;

  h1{
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins" ;

    span{
      color: #FCA311;
      font-family: "Poppins" ;

    }  
  }

  
`
export const IconDiv = styled.div`
    margin-left:auto;
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
`