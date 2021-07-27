import {
  SidebarContainer,
  Icon,
  CloseIcon

 } from './Sidebarelements'

 export interface Props{
   isOpen?: boolean ;
 }
 
const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return(
    <SidebarContainer isOpen={isOpen}>
      <Icon> 
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  )}
export default Sidebar;