import HeroSection from '../components/HeroSection';
import SideBarMenu from '../components/SidebarMenu';
import '../styles/stylesContent.scss';
const Home = () => {

  return (
    <div className="wrapper">
     
      <SideBarMenu />
      <main>
      <HeroSection />

      </main>

    </div>

  );
};

export default Home;
