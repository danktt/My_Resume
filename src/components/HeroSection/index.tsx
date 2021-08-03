import Back from '../../assets/images/back.jpg'
import { 
  // HeroContainer,
  HeroBg,
  HeroBack,
  HeroContent,
  HeroH1,
  HeroP,
  Container
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
        <HeroH1>I’m Danilo Miranda</HeroH1>
        <HeroP>SOFTWARE DEVELOPER</HeroP>
      </HeroContent>
    </Container>
  </>
  )
}

export default HeroSection;