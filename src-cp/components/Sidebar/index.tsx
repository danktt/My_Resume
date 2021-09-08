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
        <Icon > 
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SideBtnWrap>
            <SidebarRouter to="#">Download CV</SidebarRouter>
          </SideBtnWrap>
          <NavItem>
            <img src={profImg} alt=""/>            
          </NavItem>
          <SidebarMenu>
            <SidebarLink to="/" onClick={onClick}>Home</SidebarLink>
            <SidebarLink to="/about" onClick={onClick}>About</SidebarLink>
            <SidebarLink to="/services" onClick={onClick}>Services</SidebarLink>
            <SidebarLink to="/education" onClick={onClick}>Education</SidebarLink>
            <SidebarLink to="/experience" onClick={onClick}>Experience</SidebarLink>
            <SidebarLink to="/contact" onClick={onClick}>Contact</SidebarLink>    
          </SidebarMenu>
        </SidebarWrapper>
          
      </SidebarContainer>
    </>
  )
}
export default Sidebar;