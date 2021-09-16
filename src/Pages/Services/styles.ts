import styled from "styled-components";

export const Container = styled.div`
  /* display: column; */
  /* height: 100%; */
  background: #131418; 
`;

export const Div = styled.div`
  /* padding: 34px;
  max-height: 900px;
  max-width: auto; */
`;

export const AboutHeader = styled.header`
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

  /* span {
    display: block;
    width: 130px;
    border-color: #fca311;
    margin-right: auto;
    margin-top: 0rem;
    border-width: 2px;
    box-sizing: border-box;
    font-weight: 600;
  } */
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  gap: 7rem;
  height: 22vh;
  div {
    background: #14213d;
    font-size: 1.2rem;
    height: 13rem;
    width: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const ExperienceSection = styled.section`
  /* display: column; */
  /* align-items: center;
  justify-content: center;
  margin: 0 13rem; */
  
  /* height: 48vh; */
  
  header{
    color: #fff;
    margin-top:1rem;
    text-align: center;

  }

 
`

export const ExperienceMain = styled.main`
    
    height: 40vh;


  p{
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 29vw;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: .7rem;
    span{
      color: #fff;
    }
  }
`

export const ExperienceDiv1 = styled.div`
  height: 0.5rem;
  border-radius: 1rem;
  background: #fff;
  margin:0 30rem;
  /* position: relative; */
  
  div {
    width: 85%;
    height: 0.5rem;
    border-radius: 1rem;
    background: #fca311;
  }
`;

export const ExperienceDiv2 = styled.div`
  height: 0.5rem;
  border-radius: 1rem;
  background: #fff;
  margin:0 30rem;
  /* position: relative; */
  
  div {
    width: 90%;
    height: 0.5rem;
    border-radius: 1rem;
    background: #fca311;
  }
`;
export const ExperienceDiv3 = styled.div`
  height: 0.5rem;
  border-radius: 1rem;
  background: #fff;
  margin:0 30rem;
  /* position: relative; */
  
  div {
    width: 88%;
    height: 0.5rem;
    border-radius: 1rem;
    background: #fca311;
  }
`;

export const ServiceFooter = styled.footer` 
 
 height: 8.4vh;
 font-size: 3rem;
 color: #fff;
 display: flex;
 justify-content: right;
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