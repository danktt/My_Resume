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
} from './HeroElements'
import Footer from '../Footer'


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
            < Footer />
        </HeroContent>
      </Container>




      {/* <HeroContainer> */}
      {/* <HeroBg>
                <HeroBackground src={imgBackground}  />
              </HeroBg> */}
      {/* </HeroContainer> */}
    </>
  );
}

export default HeroSection;