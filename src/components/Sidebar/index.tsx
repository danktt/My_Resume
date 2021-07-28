import profImg from "../../assets/images/prof.jpeg";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  NavItem,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter
 } from './Sidebarelements'

 export interface Props{
   isOpen?: boolean ;
 }
 
const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return(
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon> 
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SideBtnWrap>
            <SidebarRouter to="/">Download CV</SidebarRouter>
          </SideBtnWrap>
          <NavItem>
            <img src={profImg} alt="Image Profile" />
            
          </NavItem>
          <SidebarMenu>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/services">Services</SidebarLink>
            <SidebarLink to="/education">Education</SidebarLink>
            <SidebarLink to="/experience">Experience</SidebarLink>
            <SidebarLink to="/contact">Contact</SidebarLink>    
          </SidebarMenu>
        </SidebarWrapper>
          
      </SidebarContainer>
    </>
  )
}
export default Sidebar;