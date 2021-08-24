import Back from '../../assets/images/back.jpg'
import Typewriter from 'typewriter-effect'
import { 
  // HeroContainer,
  HeroBg,
  HeroBack,
  HeroContent,
  HeroP1,
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
      {/* <HeroContainer> */}
        <HeroBg>
          <HeroBack src={Back}  />
        </HeroBg>
      {/* </HeroContainer> */}
      <HeroContent>
        <HeroP1>Welcome</HeroP1>
        <HeroH1> 
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: [
                "I’m Danilo Miranda",
                "I’m a Web Developer",
                "I’m a Designer",
              ],
            }}          
          />
          </HeroH1>
        <HeroP>SOFTWARE DEVELOPER</HeroP>
      
        <HeroBtnWrapper>
          <Button>
            HIRE
          </Button>
        </HeroBtnWrapper>
          <Footer />
      </HeroContent>
    </Container>
    
  </>
  )
}

export default HeroSection;