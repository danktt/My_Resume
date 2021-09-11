import styled from "styled-components";

export const Container = styled.div`
  display: column;
  height: 100%;
  background: #131418;
`

export const Div = styled.div`
  /* padding: 34px; */
  max-height: 900px;
  max-width: auto;
  
`


export const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

    h2{    
      margin-top: 8rem;
      font-family: "PT Sans Caption";
      color: #FCA311 ;
      
      /* font-size: 30px;
      letter-spacing: -3px;
      text-transform: uppercase !important;
      width: 48% !important;
      font-weight: normal;
      margin-top: 2rem; */

    }
  
    p{
      margin-top: 8rem;

      font-size: 5rem;
      font-family: "Poppins" ;
      color: #fff;
     
    }

    span{
      border-bottom: 1px solid #FCA311 ;
      display: block ;
      width: 130px;
      border-color: #FCA311 ;
      margin-right: auto ;
      margin-top: 0rem;
      border-width: 2px ;
      box-sizing: border-box;
      font-weight: 600 ;
    }
`

export const MainContent = styled.section`
  display: flex;
  justify-content: center ;
  align-items: center;
  gap: 10rem;
    
  margin-top: 5rem;

  width: 100%;


  color: #fff;

    div{
      background: #14213D;
      height:266px;
      width:277px;
      display: flex;
      justify-content:center;
      align-items: center;
      border-radius: 1rem;
      cursor: pointer;
    }

`

export const ExperienceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 13rem;
    /* background: aqua; */
 
`

export const FristSpan = styled.span`

  font-size: 1rem;
  color: #fff;
  
`

export const ExperienceDiv = styled.div`
    flex: 1;
    height: .5rem;
    border-radius: 1rem;
    background: #fff;
    margin: 0 20rem;
    /* position: relative; */

    div{
      width: 86%;
      height: .5rem;
      border-radius: 1rem;
      background: #FCA311;
    }
`
export const SecondSpan = styled.span`
   
    color: #fff;
`
