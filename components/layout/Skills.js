//Hooks
import { Context } from "../hooks/Store";
import { useRef, useState, useContext, useEffect } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "framer-motion";

//CSS
import classes from "../layout/Skills.module.css";

const skills = ["HTML5", "JavaScript (ES6+)", "React", "C#"];
const designSkills = [
  "Responsive Web Development",
  "CSS3",
  "SASS",
  "Framer Motion",
];

const Skills = () => {
  const [stateSkills, setStateSkills] = useContext(Context);
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const [value, setValue] = useState();
  const isInView = useInView(targetRef, { once: false });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest - 5568);
  });

  
  useEffect(() => {
    setStateSkills(isInView);
  }, [isInView]);

  return (
    <div ref={targetRef}  className={classes.container}>
      <m.div  className={classes.container__wrapper}>
        <m.div
          className={classes.container__header}
          initial={{ right: 0 }}
          animate={{ right: value }}
          transition={{ duration: 1 }}
        >
          <h1>Skills</h1>
        </m.div>
        <div className={classes.container__text}>
          <div className={classes.container__text__skills}>
            <ul>
              {skills.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className={classes.container__text__dSkills}>
            <ul>
              {designSkills.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Skills;
