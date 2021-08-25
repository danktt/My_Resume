import { 
  FaFacebookF,
  FaFacebookMessenger, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa"

  import {FooterWrapper, FooterText,Content} from './FooterElements'




const Footer: React.FC = () =>{
  return (
    <>
      <Content>
        <FooterText>
              <span>EN</span>
              <span>PT</span>
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
      </Content>
    </>
  )
}

export default Footer