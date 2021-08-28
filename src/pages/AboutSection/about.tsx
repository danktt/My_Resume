

import SideBarMenu from '../../components/SidebarMenu';
import {
  Container,
  AboutMain,
  AboutHeader,
  AboutH3,
} from './InfoElements'


const About: React.FC = () => {
  return (
    <>
    <Container>
        {/* <AbouteDiv> */}
          <SideBarMenu />
        {/* </AbouteDiv> */}
        <AboutHeader>
            <h1>Know Me More</h1>
        </AboutHeader>
        
        <AboutMain>
          <div>
            <AboutH3>
              I'm <p> Danilo Miranda, </p> a Software Developer
            </AboutH3>

            <p>
              I started in the administrative area and was transferred to the
              communication technology sector, where I started as a computer
              maintenance technician. Then, I took a specialized course in
              telecommunications networks, where I went further in the technology
              area. I entered the Computer Engineering course, studied 5 semesters
              and did not finish. Currently I work with Information Technology, I am
              studying Systems Analysis and Development and programming.
            </p>
          </div>
        </AboutMain>
      </Container>
    </>
  );
}

export default About;