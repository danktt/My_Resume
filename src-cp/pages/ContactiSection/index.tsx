

import SideBarMenu from '../../components/SidebarMenu';

import styled from 'styled-components'

export const H1 = styled.h1`

font-size: 200px;
display: flex;
width: 900px;

`
export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:40rem;

`


const Contact: React.FC = () => {
  return (
    <>
      <Div>
        <SideBarMenu />

        <H1>CONTACT</H1>
      </Div>
    </>
  );
}

export default Contact;