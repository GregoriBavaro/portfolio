//Hooks
import { Context } from "../hooks/Store";
import { useRef, useState, useContext, useEffect } from "react";
import {
  motion as m,
  useScroll,
  useInView,
  useMotionValueEvent,
} from "framer-motion";

//CSS
import classes from "../layout/Skills.module.css";

const skills = [
  {
    name: "HTML5",
    width:
      "linear-gradient(270deg, rgba(46,112,100,0) 33%, rgba(45,112,100,1) 33%);",
  },
  {
    name: "CSS3",
    width:
      "linear-gradient(270deg, rgba(46,112,100,0) 20%, rgba(45,112,100,1) 20%);",
  },
  {
    name: "JavaScript",
    width:
      "linear-gradient(270deg, rgba(46,112,100,0) 38%, rgba(45,112,100,1) 38%);",
  },
  {
    name: "React",
    width:
      "linear-gradient(270deg, rgba(46,112,100,0) 42%, rgba(45,112,100,1) 42%);",
  },
  {
    name: "C#",
    width:
      "linear-gradient(270deg, rgba(46,112,100,0) 65%, rgba(45,112,100,1) 65%);",
  },
];

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
          <ul>
            {skills.map(({ name, width }, i) => {
              return (
                <li key={i}>
                  <div className={classes.li__div}>
                    <h3>{name}</h3>
                    <div
                      style={{ background: width }}
                      className={classes.inside}
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </m.div>
    </div>
  );
};

export default Skills;
