import {
 InfoContainer,
 InfoWrapper,
 InfoRow,
 TextWrapper,
 TopLine,
 Heading,
} from './InfoElements'


const InfoSection: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;