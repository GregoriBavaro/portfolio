//Hooks
import { useState, useRef } from "react";
import {
  motion as m,
  useScroll,
  useMotionValueEvent,

} from "framer-motion";

//CSS
import classes from "../layout/About.module.css";

const About = () => {
  const targetRef = useRef();
  const [value, setValue] = useState();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest - 680);
  });

  return (
    <m.div ref={targetRef} className={classes.container}>
      <m.div
        className={classes.container__header}
        initial={{ x: -600 }}
        animate={{ x: value }}
        transition={{ duration: 0.7 }}
      >
        <h1>About Me</h1>
      </m.div>
      <div className={classes.container__text}>
        <p>
          I am Creative and skillful front-end web developer with a passion for
          design and creating elegant solutions. I care deeply about user
          experience with a serious passion for UI design and new technologies.I
          love to create beautiful and performant products with delightful user
          experiences.
        </p>
      </div>
    </m.div>
  );
};

export default About;
