//Hooks
import { Fragment, useRef } from "react";

//Components
import Navigation from "../components/layout/Navigation";
import Hero from "../components/ui/Hero";
import Photo from "../components/ui/Photo";
import AboutHero from "../components/ui/HeroAbout";
import About from "../components/layout/About";
import Projects from "../components/layout/Projects";
// import Contact from "../components/layout/Contact";

//Data
import ProjectOne from "../data/project-one";
import ProjectTwo from "../data/project-two";

//CSS
import classes from "../components/layout/Projects.module.css";

const projectOneData = {
  number: "1",
  name: "MM9 Machinery",
  job1: "Front End Developer",
  job2: "Designer",
  description:
    "Developed end-to-end solution for a client in the corrugated box manufacturing business. The main focus was to create a product that is user-friendly with amazing UX/UI, optimizing the application for maximum speed and building responsive styled components for a better overall user experience, especially for mobile and tablet users. Developed in React.js & .Net, with build in administrator panel.",
};

const ProjectTwoData = {
  number: "2",
  name: "Productivity App",
  job1: "Front End Developer",
  job2: "Designer",
  description:
    "Developed end-to-end solution with a team of 3 developers, Productivity Web Application aimed at task and time management to help people struggling with productivity management, and help them handle their workload better.",
};

const HomePage = () => {
  const { projectOnePhotos: projectOnePhotos } = ProjectOne();
  const { projectTwoPhotos: projectTwoPhotos } = ProjectTwo();

  const aboutRef = useRef();
  const projectsRef = useRef();

  console.log(aboutRef);
  return (
    <Fragment>
      <Navigation refs={[aboutRef, projectsRef ]} />
      <Hero />
      <AboutHero />
      <Photo />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects
          dataObject={projectOneData}
          photos={projectOnePhotos}
          class={classes.container__p1}
        />
        <Projects
          dataObject={ProjectTwoData}
          photos={projectTwoPhotos}
          class={classes.container__p2}
        />
      </div>

      {/* <Contact /> */}
    </Fragment>
  );
};

export default HomePage;
