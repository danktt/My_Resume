// import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";


import styled  from "styled-components";






export const Nav = styled.nav` 
  width: 100%;
  height: 4rem;
  margin-top: -4rem;
  padding: 0 1rem;
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  background: transparent;


  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  
`

export const NavLogo = styled.h1`
  font-family: Fira Sans Condensed;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline #FCA311  4px;  
` 

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1390px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 1390px){
    display: none;
  }
`

export const NavItem =  styled.div`
  height: 3rem;
`



export const NavLinks = styled(LinkR)`
  font-family: Poppins 200;
  font-size: 1.3rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover{
    color: #FCA311;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;  

  @media screen and (max-width: 1390px){
    display: none;
  }
`


export const NavBtnLink = styled(LinkR)`
  font-family: Poppins 300;
  text-decoration: none;

  border-radius: 50px;
  background: var(--yellow-hard);
  white-space: nowrap;
  padding: 10px 22px;
  color: #000814;
  font-size: 19px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;


  &:hover{
    filter: brightness(0.8);

  }
`