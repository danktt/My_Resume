import {
  Container,
  ExperienceHeader,
  ExperienceMain,
  Div,
  ContactDiv,
  ContactFooter,
  SectionFirst,
  SectionSecond,
  SideBtnWrap,
  SidebarRouter,
  RobotDiv,
  IconDiv,
} from "./styles";

import {
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md"

import "../../styles/stylesContent.scss";
import SideBarMenu from "../../Components/SidebarMenu";

const Contact: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <ExperienceHeader>
                <h2>CONTACT</h2>
                <p>Get in Touch</p>
              </ExperienceHeader>

              <ExperienceMain>
                <SectionFirst>
                  <header>
                    <h1>MAPA</h1>
                  </header>
                  <div>
                    <div>
                    <FaMapMarkedAlt />
                    <h1>ADDRESS</h1>
                    </div>

                    <p>789 Bom Jesus da Lapa Street Três Lagoas MS Brazil</p>
                   
                   <div>
                    <MdEmail />
                    <h1>E-MAIL</h1>
                   </div>
                   
                    <p>danilo.miranda15@ gmail.com</p>
                   <div>
                    <FaPhoneAlt />
                    <h1>CELLPHONE</h1>
                   </div>
                    <p>+55 67 991612644</p>

                    
                    <span>FOLLOW ME</span>
                    <div>
                      <div>
                        <FaLinkedinIn />
                      </div>
                      <div>
                        <FaWhatsapp />
                      </div>
                      <div>
                        <FaTwitter />
                      </div>
                      <div>
                        <FaFacebookF />
                      </div>
                      <div>
                        <FaInstagram />
                      </div>
                      <div>
                        <FaGithub />
                      </div>
                      <div>
                        <FaFacebookMessenger />
                      </div>
                    </div>
                  </div>
                </SectionFirst>

                <SectionSecond>
                  <h1>How can I <span>help you?</span> </h1>
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Subject" />

                  <textarea placeholder="Message"></textarea>

                  <RobotDiv>
                    I`m not a Robot
                  </RobotDiv>


                  <SideBtnWrap>
                     <SidebarRouter>Send message</SidebarRouter>
                  </SideBtnWrap>

                </SectionSecond>
              </ExperienceMain>

              <ContactFooter>
                
                <ContactDiv>
                  <h1>Copyright  C  2021 <span>Danilo Miranda</span>.</h1>
                  <p> All Rights Reserved.</p>
                 <span>Terms  Policy   |  Disclaimer </span>
                </ContactDiv>
                
                <IconDiv>
                  <FaWhatsapp />
                </IconDiv>
              </ContactFooter>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Contact;
