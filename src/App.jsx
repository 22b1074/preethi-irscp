import TeamSection from "./components/Team";
import HeroSection from "./components/Hero";
import NavBar from "./components/Navbar";
import AboutSection  from "./components/AboutSection.jsx";
export default function App()  {
    return (
      <> 
      <NavBar />
      {/* <HeroSection/> */}
      <AboutSection />
      <TeamSection />
      </>
    )
  }
