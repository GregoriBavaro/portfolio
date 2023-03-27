//Hooks
import { useState, useRef } from "react";
import { motion as m, useInView } from "framer-motion";

//Components
import Canvas from "../ui/Canvas";

//CSS
import classes from "../layout/About.module.css";

const About = () => {
  const targetRef = useRef();

  const isInView = useInView(targetRef, { once: true, amount: "some" });

  return (
    <m.div ref={targetRef} className={classes.container}>
      {isInView && (
        <m.div
          className={classes.text}
          initial={{ x: "-150%" }}
          animate={{ x: "0" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className={classes.text__uppercase}>
            <span className={classes.text__line}>About Me</span>
          </h3>

          <div className={classes.text__bottom}>
            <h3>
              I am Creative and skillful front-end web developer with a passion
              for design and creating elegant solutions. I care deeply about
              user experience with a serious passion for UI design and new
              technologies.I love to create beautiful and performant products
              with delightful user experiences.
            </h3>
          </div>
        </m.div>
      )}
      {isInView && (<m.div className={classes.threeD}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 2, 1] }}
        transition={{ duration: 0.8, delay: 0.6  }}
      >
        <Canvas />
      </m.div>)}
    </m.div>
  );
};

export default About;
