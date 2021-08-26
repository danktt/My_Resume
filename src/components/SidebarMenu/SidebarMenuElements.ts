import styled from "styled-components"
import { Link as LinkS } from 'react-router-dom'


  export const Nav = styled.nav`
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 24rem;
    width: 100%;
    height:100%;
    padding: 2rem;
  ` 

  export const NavItem = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 3rem;

    img{ 
      border-radius: 50%;
      height: 9rem;
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



