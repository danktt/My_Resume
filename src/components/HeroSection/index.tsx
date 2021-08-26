// import imgBackground from '../../assets/images/background.jpg'
import Typewriter from 'typewriter-effect'
import { 
  // HeroContainer,
  //HeroBg,
  //HeroBackground,
  HeroContent,
  HeroTitle,
  HeroH1,
  HeroP,
  Container,
  HeroBtnWrapper,
  Button,
  FooterWrapper, 
  FooterText,
  FooterContainer
} from './HeroElements'

import { 
  FaFacebookF,
  FaFacebookMessenger, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa"

const HeroSection: React.FC = () => {
  return (
    <>
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
      </Container>

     {/* ===============Footer=================            */}
     <FooterContainer>
       
            <FooterText>
                  <p>EN</p>
                  <p>PT</p>
              </FooterText>
         
          
          <FooterWrapper>
            <FaLinkedinIn />
            <FaWhatsapp />  
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
            <FaFacebookMessenger />
        </FooterWrapper>
      </FooterContainer>





      {/* <HeroContainer> */}
      {/* <HeroBg>
                <HeroBackground src={imgBackground}  />
              </HeroBg> */}
      {/* </HeroContainer> */}
    </>
  );
}

export default HeroSection;