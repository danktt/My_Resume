import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;


  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width:100%;
  padding: 0 24px;
  max-width: 1440px;
 
`


export const NavLogo = styled(LinkR)`
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
  text-decoration: none;
  
  
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1050px){
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
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1050px){
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)`
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
  

  &.acitve{
    color: #FCA311;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1050px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  font-family: Poppins 300;
  text-decoration: none;

  border-radius: 50px;
  background: #FCA311;
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