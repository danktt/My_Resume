import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  background: #131418;
`

export const Div = styled.div`
  /* padding: 34px; */
  max-height: 900px;
  max-width: auto;
  
`


export const EduacitonHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 12rem;
  margin-bottom: -10rem;



    h2{
      align-self: center;
      font-family: "PT Sans Caption";
      color: #FCA311 ;
    }
  
    p{
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


export const EduactionMain = styled.div`
  width: 1095px;
  height: 489px;
  background: #14213D;
  border-radius: 1rem;


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
