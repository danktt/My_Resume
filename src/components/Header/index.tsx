import  './styles.scss'

import logoImg from '../../assets/logo.svg'


export function Header(){
  return(
    <>
    <div className="logo">
      <img src={logoImg} alt="Logo" />
    </div>

    <nav className="navMenu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Education</a>
      <a href="#">Experience</a>
      <a href="#">Contact</a>
    </nav>
    </>
  )
}