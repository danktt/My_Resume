import { 
  FaFacebookF,
  FaFacebookMessenger, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa"
import {FooterWrapper} from './FooterElements'




const Footer: React.FC = () =>{
  return (
    <>
    <FooterWrapper>
      <FaLinkedinIn />
      <FaWhatsapp />
      <FaTwitter />
      <FaFacebookF />
      <FaInstagram />
      <FaGithub />
      <FaFacebookMessenger />
    </FooterWrapper>
    </>
  )
}

export default Footer