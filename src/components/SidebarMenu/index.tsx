import profImg from "../../assets/images/prof.jpeg";

import {
  SideBtnWrap,
  SidebarRouter,
  Nav, 
  NavItem,
  NvH1, 
  NavMain,
  SidebarLink 
} from './SidebarMenuElements'



const SideBarMenu: React.FC = () => {
  
  return(
    <Nav>
      
      <NavItem>
       <img src={profImg} alt=""/> 
      </NavItem>
      
      <NvH1>Danilo</NvH1>

      <NavMain >
         <SidebarLink to="/" >Home</SidebarLink>
         <SidebarLink to="/about" >About</SidebarLink>
         <SidebarLink to="/services" >Services</SidebarLink>
         <SidebarLink to="/education" >Education</SidebarLink>
         <SidebarLink to="/experience" >Experience</SidebarLink>
         <SidebarLink to="/contact" >Contact</SidebarLink>
          
      </NavMain>

      <SideBtnWrap>
        <SidebarRouter to="vaikagar">Download CV</SidebarRouter>
      </SideBtnWrap>
    </Nav>
  )
}

export default SideBarMenu;