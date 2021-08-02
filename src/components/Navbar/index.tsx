import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

export interface ToggleProps {
  toggle(): void;
}

const Navbar:React.FC<ToggleProps> = ({toggle})=>{
  return(
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">DANKTT</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu> 
          <NavItem> 
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
          <NavItem> 
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem> 
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem> 
            <NavLinks to="education">Education</NavLinks>
          </NavItem>
          <NavItem> 
            <NavLinks to="experience">Experience</NavLinks>
          </NavItem>
          <NavItem> 
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
          
        </NavMenu>
          <NavBtn> 
            <NavBtnLink to="">Download CV</NavBtnLink>
          </NavBtn>
       </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;