import {
  Container,
  AboutHeader,
  MainContent,
  Div,
  ExperienceSection,
  ExperienceMain,
  ExperienceDiv1,
  ExperienceDiv2,
  ExperienceDiv3,
  ServiceFooter,
} from "./styles";

import "../../styles/stylesContent.scss";
import SideBarMenu from "../../Components/SidebarMenu";
import { FaWhatsapp } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <AboutHeader>
                <h2>SERVICES</h2>

                <p>What I do</p>
              </AboutHeader>

              <MainContent>
                <div>FRONT-END</div>
                <div>BACK-END</div>
                <div>SYSTEMS</div>
              </MainContent>

              <ExperienceSection>
                <header>
                  <h2>Hard Skills</h2>
                </header>

                <ExperienceMain>
                  <p>
                    ReactJs <span>85%</span>
                  </p>

                  <ExperienceDiv1>
                    <div></div>
                  </ExperienceDiv1>

                  <p>
                    Git <span>92%</span>
                  </p>

                  <ExperienceDiv2>
                    <div></div>
                  </ExperienceDiv2>

                  <p>
                    Linux <span>88%</span>
                  </p>

                  <ExperienceDiv3>
                    <div></div>
                  </ExperienceDiv3>
                </ExperienceMain>
              </ExperienceSection>

              <ServiceFooter>
                <div>
                
                  <FaWhatsapp />
                </div>
              </ServiceFooter>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Services;
