import Back from '../../assets/images/back.jpg'
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
  HeroFooter
} from './HeroElements'


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
        <HeroH1>I’m Danilo Miranda <p>.</p></HeroH1>
        <HeroP>SOFTWARE DEVELOPER</HeroP>
      
        <HeroBtnWrapper>
          <Button>
            HIRE
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </Container>
    <HeroFooter>
      Aqui é o footer
    </HeroFooter>
  </>
  )
}

export default HeroSection;