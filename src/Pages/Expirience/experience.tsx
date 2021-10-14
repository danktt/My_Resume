import {
  Container,
  ExperienceHeader,
  ExperienceMain,
  Div,
  ExperienceFooter,
} from "./InfoElements";

import "../../styles/stylesContent.scss";
import SideBarMenu from "../../Components/SidebarMenu";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <ExperienceHeader>
                <h2>EXPERIENCE</h2>
                <p>Occupation</p>
              </ExperienceHeader>

              <ExperienceMain>
                  <section>
                    <div>
                      <header>
                        <p>Brazilian Army</p> 
                        <span>2018 – 2021</span>
                      </header>
                      <main>
                      <h2>System Developer</h2>
                      <p>Linux | PHP | Laravel | MySQL | CSS | HTML</p>
                      </main>
                    </div>

                    <div>
                      <header>
                        <p>Brazilian Army</p> 
                        <span>2020 – 2023</span>
                      </header>
                      <main>
                      <h2>Network and telecommunication technician</h2>
                      <p>Provide preventive and corrective maintenance in telecommunications systems</p>
                      </main>
                    </div>
                    <div>
                      <header>
                        <p>Brazilian Army</p> 
                        <span>2020 – 2023</span>
                      </header> 
                      <main>
                      <h2>Computer maintenance technician</h2>
                      <p>Performs preventive and corrective maintenance of computer equipment, identifying the main components of a computer and its functionalities</p>
                      </main>
                    </div>
                  </section>
              </ExperienceMain>

              <ExperienceFooter>
                <div>
                  <FaWhatsapp />
                </div>
              </ExperienceFooter>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Contact;
