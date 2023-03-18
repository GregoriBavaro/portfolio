//Hooks
import { useRef } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

//CSS
import classes from "../layout/Projects.module.css";

//Data
import ProjectOne from "../../data/project-one";

const Projects = (props) => {
  const targetRef = useRef(null);
  const descriptionRef = useRef(false);
  const isInView = useInView(descriptionRef, { once: false, amount: "all" });



  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // const scale = useTransform(scrollYProgress, [1, 1], [1 , 1]);
  // const x = useTransform(scrollYProgress, [0.1, 1], ["20%", "-20%"]);
  // const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0 ? "fixed" : "relative";
  });

  // const { projectOnePhotos: projectOnePhotos } = ProjectOne();

  const styleText = {
    background:
      "linear-gradient(to left, var(--lightBeige) 50%, #121212 50%) right",
    backgroundSize: "200%",
    backgroundPosition: isInView ? "left" : "right",
    transitionDelay: "1s",
    transitionProperty: "background",
    transition: "1s ease-out",
    
  };

  return (
    <m.div ref={targetRef} className={props.class}>
      <m.div style={{ position }} className={classes.container__wrapper}>
        <AnimatePresence>
          <m.div
            ref={descriptionRef}
            className={classes.container__text}
            style={{
              opacity: isInView ? 1 : 0,
              transition: ".1s ease-in-out",
            }}
          >
            <m.h1 style={styleText} >{props.dataObject.number}</m.h1>
            <div className={classes.container__text__about}>
              <m.h2 ref={descriptionRef} style={styleText}>
                {props.dataObject.name}
              </m.h2>
              <m.h3 ref={descriptionRef} style={styleText}>
                {props.dataObject.job1}<span>&#x2022;</span>{props.dataObject.job2}
              </m.h3>
              <m.p ref={descriptionRef} style={styleText}>
                {props.dataObject.description}
              </m.p>
            </div>
            <m.h4 ref={descriptionRef} style={styleText}>Web App</m.h4>
          </m.div>
        </AnimatePresence>

        <div className={classes.container__images}>
          {props.photos.map(({ alt, src, y, x, scale }, i) => {
            return (
              <m.div
                key={i}
                style={{ y, x, scale }}
                className={classes.container__images__wrapper}
              >
                <img src={src.src} alt={alt} />
              </m.div>
            );
          })}
        </div>
      </m.div>
    </m.div>
  );
};

export default Projects;
