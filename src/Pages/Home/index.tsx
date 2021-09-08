import { 
  
  HeroContent,
  HeroTitle,
  HeroH1,
  HeroP,
  Container,
  HeroBtnWrapper,
  Button,
  FooterIcons, 
  FooterContainer
} from './styles'

import { 
  FaFacebookF,
  FaFacebookMessenger, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa"

import Typewriter from 'typewriter-effect'

import Navbar from "../../Components/Navbar/Navbar";
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar';



const Home:React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return(
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
              <Button>HIRE</Button>
            </HeroBtnWrapper>
          </HeroContent>

          <FooterContainer>
            
            <FooterIcons>
                <FaLinkedinIn />
              <FaWhatsapp />
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaGithub />
              <FaFacebookMessenger />
            </FooterIcons>
          </FooterContainer>
        </Container>
    </>
  )
}

export default Home;