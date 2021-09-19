import {
  Container,
  EduactionMain,
  EduacitonHeader,
  Div,
  EducationDiv,
  EducationFooter,
  Footer,
} from "./styles";

import "../../styles/stylesContent.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscDebugBreakpointLog } from "react-icons/vsc"
import SideBarMenu from "../../Components/SidebarMenu";
import { FaWhatsapp } from "react-icons/fa";

const Education: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <EduacitonHeader>
                <div>
                  EDUCATION               
                </div>

                <p>Knowledge</p>
              </EduacitonHeader>

              <EduactionMain>
                <header>
                  <span>2020 – 2023</span>
                  <h1>University Unicesumar of Três Lagoas</h1>
                  <h2>Diploma Technologist System analysis and development </h2>
                </header>

                <EducationDiv>
                  <div>
                    <IoIosArrowBack />
                  </div>
                  <p>
                    The course aimed at training, enabling professional
                    performance in the areas of software development, interfaces
                    and applications. Possibility to manage systems projects in
                    multidisciplinary teams, including access to databases and
                    application development; it also works with emerging
                    technologies, such as mobile computing and distributed
                    systems; and installation, update, maintenance and security
                    of systems, in companies, organizations or in the creation
                    of your own business.
                  </p>
                  <div>
                    <IoIosArrowForward />
                  </div>
                </EducationDiv>

                <EducationFooter>
                  <div> <VscDebugBreakpointLog /></div>
                  <div> <VscDebugBreakpointLog /></div>
                  <div> <VscDebugBreakpointLog /></div>
                </EducationFooter>
              </EduactionMain>

              <Footer>
                <div>
                  <FaWhatsapp />
                </div>
              </Footer>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Education;
