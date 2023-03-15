//Hooks
import { Fragment } from "react";

//Components
import Navigation from "../components/layout/Navigation";
import Hero from "../components/ui/Hero";
import Photo from "../components/ui/Photo";
import AboutHero from "../components/ui/HeroAbout";
import About from "../components/layout/About";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <AboutHero />
      <Photo />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default HomePage;
