import {
  Container,
  AboutHeader,
  MainContent,
  Div,
  ExperienceContent,
  FristSpan,
  SecondSpan,
  ExperienceDiv,
} from "./styles";

import "../../styles/stylesContent.scss";
import SideBarMenu from "../../Components/SidebarMenu";

const Services: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <SideBarMenu />

        <main>
          <Container>
            <Div>
              <AboutHeader>
                <h2>
                  About Me <span> </span>
                </h2>

                <p>What I do</p>
              </AboutHeader>

              <MainContent>
                <div>FRONT-END</div>
                <div>BACK-END</div>
                <div>SYSTEMS</div>
              </MainContent>

              <ExperienceContent>
                <FristSpan>ReactJs</FristSpan>
                    <ExperienceDiv>
                      <div />
                    </ExperienceDiv>
                <SecondSpan>86%</SecondSpan>
              </ExperienceContent>

              <ExperienceContent>
                <FristSpan>Git</FristSpan>
                    <ExperienceDiv>
                      <div />
                    </ExperienceDiv>
                <SecondSpan>85%</SecondSpan>
              </ExperienceContent>

              <ExperienceContent>
                <FristSpan>Linux</FristSpan>
                    <ExperienceDiv>
                      <div />
                    </ExperienceDiv>
                <SecondSpan>90%</SecondSpan>
              </ExperienceContent>
            </Div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Services;
