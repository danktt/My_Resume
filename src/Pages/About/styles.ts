import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
  margin: 0 auto;
  padding: 12rem;
  margin-bottom: -8rem;

 

    h2{

      align-self: center;
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

      font-size: 5rem;
      font-family: "Poppins" ;
      color: #fff;
      
      
      /* 
      
      font-size: 80px;
      position: absolute !important;
      margin-top: 1rem;
      align-self: center;
      text-align: center !important;
      z-index:1;
      font-weight: bold; */
    }

    span{
      border-bottom: 1px solid #FCA311 !important;
      display: block !important;
      width: 130px;
      border-color: #FCA311 !important;
      margin-right: auto !important;
      margin-top: 0rem;
      border-width: 2px !important;
      box-sizing: border-box;
      font-weight: 600 !important;
    


    }
`


export const AboutMain = styled.div`
/* height: 610px; */
/* max-width: 100%; */
padding-right: auto;
padding-left: auto;
/* margin-top: 1rem; */
display: column;
justify-content: center;
align-items: auto;

h2{
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  gap: 5px;
  margin-bottom: 3rem;
  
  span{
    color: #FCA311;
  }
}


p{
  color: #fff;
  font-size: 25px;
  padding: 0 20rem;
  margin-top: 1rem;
}
`


