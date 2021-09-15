import {
  HeroContent,
  HeroTitle,
  HeroH1,
  HeroP,
  Container,
  HeroBtnWrapper,
  Button,
  FooterIcons,
  FooterContainer,
  FooterText,
} from "./styles";

import {
  FaFacebookF,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { GiGears } from "react-icons/gi"

import Typewriter from "typewriter-effect";

import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} onClick={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <HeroContent>
          <HeroTitle>Welcome</HeroTitle>
          <div>
            <HeroH1>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["I’m Danilo Miranda.", "I’m a Web Developer."],
                }}
              />
            </HeroH1>
          </div>
          <HeroP>SOFTWARE DEVELOPER</HeroP>
          <HeroBtnWrapper>
            <div>
              <GiGears />
            </div>
            <Button>HIRE</Button>
          </HeroBtnWrapper>
        </HeroContent>

        <FooterContainer>
          <FooterText>
            <span>EN</span>
            <span>PT</span>
          </FooterText>
          <FooterIcons>
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
          </FooterIcons>
        </FooterContainer>
      </Container>
    </>
  );
};

export default Home;
