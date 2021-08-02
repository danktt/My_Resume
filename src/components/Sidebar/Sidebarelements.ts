import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'


import { Props } from '.'


export const SidebarContainer = styled.aside<Props>`
  position: fixed;
  z-index:999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => props.isOpen ? '100%' : '0'};
  top: ${( props) => props.isOpen ? '0' : '-100%'};

`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`


export const SidebarWrapper = styled.div`
  color: #fff;
  
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
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 80px);

  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:1.5rem;
  text-decoration: none;
  list-style: none;
  transition: filter 0.2s;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover{
    color: #FCA311; 
    filter: brightness(0.8);
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
`
export const SidebarRouter = styled(LinkR)`
  border-radius: 50px;
  background: #FCA311;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000814;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);

  }
`
