import {Nav , NavbarContainer, NavLogo } from './NavbarElements'



export function Navbar(){
  return(
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">DANKTT</NavLogo>
       </NavbarContainer>
    </Nav>
    </>
  )
}