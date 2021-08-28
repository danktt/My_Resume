import styled from "styled-components"
import { Link as LinkS } from 'react-router-dom'
import { Link as LinkR } from 'react-router-dom'



  export const Nav = styled.nav`
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 23rem;
    
    /* height:100vh; */
    padding: 2rem;
  
  ` 

  export const NavItem = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 3rem;

    img{ 
      border-radius: 50%;
      height: 12rem;
      border: 3px solid #FCA311;
    }

`
  export const NvH1 = styled.h1`
    margin-bottom: 4.5rem;
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
  ` 
 export const NavMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
 `
  export const SidebarLink = styled(LinkS)`
    font-family: Poppins 200;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
      
      filter: brightness(0.8);
      color: #FCA311; 
    }
  `

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
`
export const SidebarRouter = styled(LinkR)`
  border-radius: 50px;
  background: #FCA311;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000814;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);

  }
`

