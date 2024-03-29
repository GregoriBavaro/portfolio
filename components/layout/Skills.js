//Hooks
import { Context } from "../hooks/Store";
import { useRef, useContext, useEffect, useState } from "react";
import { motion as m, useInView } from "framer-motion";
import useWindowSize from "../hooks/use-windowDimensions";
import CanvasSkills from "../ui/CanvasSkills"

//Components
import Arrow from "../ui/Arrow";

//CSS
import classes from "../layout/Skills.module.css";

const developerItems = [
  {
    letter: "E",
    delay: 0.2,
  },
  {
    letter: "X",
    delay: 0.3,
  },
  {
    letter: "P",
    delay: 0.4,
  },
  {
    letter: "E",
    delay: 0.5,
  },
  {
    letter: "R",
    delay: 0.6,
  },
  {
    letter: "I",
    delay: 0.7,
  },
  {
    letter: "E",
    delay: 0.8,
  },
  {
    letter: "N",
    delay: 0.9,
  },
  {
    letter: "C",
    delay: 1,
  },
  {
    letter: "E",
    delay: 1.1,
  },
];

const Skills = () => {
  const {desktop, tablet, mobile620, mobile390} = CanvasSkills();
  const { skills } = useContext(Context);
  const [stateSkills, setStateSkills] = skills;
  const targetRef = useRef(null);
  const [threeDModel, setThreeDModel] = useState(desktop);
  const isInView = useInView(targetRef, { once: false });
  const isInViewSkills = useInView(targetRef, { once: true });
  const size = useWindowSize();

  useEffect(() => {
    setStateSkills(isInView);
  }, [isInView]);

  useEffect(() => {
    if (size.width < 1250) {
      setThreeDModel(tablet);
    } else {
      setThreeDModel(desktop);
    }
    if (size.width < 620) {
      setThreeDModel(mobile620);
    } 
    if (size.width < 390) {
      setThreeDModel(mobile390)
    }
  }, [size.width]);

  return (
    <div ref={targetRef} className={classes.container}>
      <div className={classes.container__wrapper}>
        {isInViewSkills && (
          <div className={classes.text}>
            <div className={classes.text__skills}>
              {developerItems.map(({ letter, delay }, i) => {
                return (
                  <m.span
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: delay, duration: 1 }}
                    key={i}
                  >
                    {letter}
                  </m.span>
                );
              })}
            </div>
            <div className={classes.text__bottom}>
              <h3>
                Since beginning my journey as a web developer, i’ve collaborated
                with talented developers to create beautiful, user-friendly, and
                responsive web applications for both business and consumer use.
                The main area of my expertise is frontend development with,
                HTML, CSS, JavaScript, building optimized web applications, with
                beautiful animations and user-friendly interfaces.
              </h3>
            </div>
          </div>
        )}
        <div className={classes.text__skills__wrapper}>
          <div className={classes.skills3D}>
            {threeDModel}
            <div className={classes.arrow}>
              <div className={classes.arrowSvg}>
                <Arrow />
                <h1>Hover to see my skills</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
