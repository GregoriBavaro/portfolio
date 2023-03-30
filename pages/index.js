//Hooks
import Store from "../components/hooks/Store";
import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

//Components
import Navigation from "../components/layout/Navigation";
import AboutHero from "../components/ui/HeroAbout";
import About from "../components/layout/About";
import Projects from "../components/layout/Projects";
import Skills from "../components/layout/Skills";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import CircleColorsSvg from "../components/ui/CircleColorsSvg";

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
    "Developed end-to-end solution for a client in the corrugated box manufacturing business. The main focus was to create a product that is user-friendly with amazing UX/UI, optimizing the application for maximum speed and building responsive styled components for a better overall user experience, especially for mobile and tablet users. Developed in React.js & .Net.",
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
  const skillsRef = useRef();
  const contactRef = useRef();
  const betweenProjects = useRef();

  const isInView = useInView(betweenProjects, { once: false, amount: "some" });

  return (
    <Store>
      <Navigation refs={[aboutRef, projectsRef, skillsRef, contactRef]} />
      <m.div
        initial={{ display: "none" }}
        animate={{ display: "inline-block" }}
        transition={{ delay: 3.5, duration: 0.1 }}
        className="parent"
      >
        <AboutHero />
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects
            dataObject={projectOneData}
            photos={projectOnePhotos}
            class={classes.container__p1}
            hideFirst={isInView}
          />
          <div ref={betweenProjects}></div>
          <Projects
            dataObject={ProjectTwoData}
            photos={projectTwoPhotos}
            class={classes.container__p2}
            hideFirst={isInView}
          />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </m.div>
      <Footer />
    </Store>
  );
};

export default HomePage;
