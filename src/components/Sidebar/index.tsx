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
   onClick(): void ;
 }
 
 
const Sidebar: React.FC<Props> = ({ isOpen, onClick}) => {
  return(
    <>
      <SidebarContainer   isOpen={isOpen} onClick={onClick}>
        <Icon onClick={onClick}> 
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SideBtnWrap>
            <SidebarRouter to="/">Download CV</SidebarRouter>
          </SideBtnWrap>
          <NavItem>
            <img src={profImg} alt=""/>            
          </NavItem>
          <SidebarMenu>
            <SidebarLink to="/home">Home</SidebarLink>
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