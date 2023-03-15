//Hooks
import { useState, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

//CSS
import classes from "../layout/Projects.module.css";

const Projects = () => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1]);
  const y = useTransform(
    scrollYProgress,
    [0.1,  1],
    ["0", "-55%"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1,0])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0 ? "relative" : "fixed"
  } )

  return (
    <m.section   ref={targetRef} className={classes.section}>
      <m.div style={{ position, top: "0%"}} className={classes.container}>
        <h1>01</h1>
        <div className={classes.container__wrapper}>
          <div className={classes.container__text}>
            <h1>MM9 Machinery</h1>
            <h3>Front-end Developer UI Designer</h3>
            <p></p>
          </div>
          <div className={classes.container__images}>
            <m.div  className={classes.container__images_one}>
              <img src="\static\images\compass.png" />
            </m.div>
            <m.div className={classes.container__images_two}>
              <img src="\static\images\design-tool.png" />
            </m.div>
          </div>
        </div>
      </m.div>
    </m.section>
  );
};

export default Projects;
