import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

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