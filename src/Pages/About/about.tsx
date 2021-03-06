import { Container, AboutMain, AboutHeader, Div, AboutFooter } from "./styles";

import "../../styles/stylesContent.scss";
import SideBarMenu from "../../Components/SidebarMenu";
import { FaWhatsapp } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <AboutHeader>
                <h2>ABOUTE ME</h2>
                <p>Know Me More</p>
              </AboutHeader>

              <AboutMain>
                <h2>
                  I'm <span> Danilo Miranda, </span> a Software Developer
                </h2>

                <p>
                  I started in the administrative area and I was transferred to
                  the communication technology sector, where I started as a
                  computer maintenance technician.
                </p>
                <p>
                  Then, I took a specialized course in telecommunications
                  networks, where I went further in the technology area.
                </p>
                <p>
                  I entered the Computer Engineering course, studied 5 semesters
                  and did not finish.
                </p>
                <p>
                  Currently I`m graduated in Systems Analysis and Development
                  and I work as a computer programer.
                </p>
              </AboutMain>

              <AboutFooter>
                <div>
                  <FaWhatsapp />
                </div>
              </AboutFooter>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default About;
