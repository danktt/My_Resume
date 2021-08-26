

import SideBarMenu from '../../components/SidebarMenu';
import {
 InfoContainer,
 InfoWrapper,
 InfoMain,
 TextWrapper,
 TopLine,
 Heading,
 HeadingText
} from './InfoElements'


const About: React.FC = () => {
  return (
    <>
      <SideBarMenu />
      <InfoContainer>
        <InfoWrapper>
            
            <InfoMain>
              <TextWrapper>
                <TopLine>know Me More</TopLine>
                <Heading>I'm a Software Developer</Heading>
                <HeadingText>
                  I started in the administrative area and was transferred to the communication technology sector, where I started as a computer maintenance technician. 
                  Then, I took a specialized course in telecommunications networks, where I went further in the technology area. 
                  I entered the Computer Engineering course, studied 5 semesters and did not finish. 
                  Currently I work with Information Technology, I am studying Systems Analysis and Development and programming.
                </HeadingText>
              </TextWrapper>
            </InfoMain>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default About;