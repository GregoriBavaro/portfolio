//Hooks
import { Context } from "../hooks/Store";
import { useRef, useState, useContext, useEffect } from "react";
import {
  motion as m,
  useScroll,
  useInView,
  useMotionValueEvent,
} from "framer-motion";

//Components
import  CanvasSkills  from "../ui/CanvasSkills";

//CSS
import classes from "../layout/Skills.module.css";

const Skills = () => {
  const [stateSkills, setStateSkills] = useContext(Context);
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: false });

  useEffect(() => {
    setStateSkills(isInView);
  }, [isInView]);

  return (
    <div ref={targetRef} className={classes.container}>
      <m.div className={classes.container__wrapper}>
        <div className={classes.text}>
          <h3 className={classes.text__uppercase}>
            <span className={classes.text__line}>Skills &</span>
            <br />
            <span className={classes.text__line}>Experience</span>
            <br />
          </h3>
          <div className={classes.text__bottom}>
            <h3>
              Since beginning my journey as a web developer, i’ve collaborated
              with talented developers to create beautiful, user-friendly, and
              responsive web applications for both business and consumer use.
              The main area of my expertise is frontend development with, HTML,
              CSS, JavaScript, building optimized web applications, with
              beautiful animations and user-friendly interfaces.
            </h3>
          </div>
        </div>
        <div className={classes.text__skills__wrapper}>
          {isInView && (
            <m.div
              className={classes.skills3D}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 2, 1] }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CanvasSkills />
            </m.div>
          )}
        </div>
      </m.div>
    </div>
  );
};

export default Skills;
