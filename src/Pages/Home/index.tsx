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
import { Link } from "react-router-dom";


type UriProps = {
  uriLink: string;

}


const Home: React.FC<UriProps> = (props: UriProps) => {
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
            <Button to="/contact">HIRE</Button>
          </HeroBtnWrapper>
        </HeroContent>

        <FooterContainer>
          <FooterText>
            <span>EN</span>
            <span>PT</span>
          </FooterText>
          <FooterIcons>
            <a href="https://www.linkedin.com/in/danilo-miranda15/" target="_blank" >
              <FaLinkedinIn />
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/danilo.miranda.1272/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/_daniilo.01/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/danktt" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/messages" target="_blank">
              <FaFacebookMessenger />
            </a>
          </FooterIcons>
        </FooterContainer>
      </Container>
    </>
  );
};

export default Home;
