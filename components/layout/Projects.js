//Hooks
import { Context } from "../hooks/Store";
import { useRef, useContext, useEffect } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

//CSS
import classes from "../layout/Projects.module.css";

const Projects = (props) => {
  const [stateSkills, setStateSkills] = useContext(Context);
  const targetRef = useRef(null);
  const descriptionRef = useRef(false);
  const isInView = useInView(descriptionRef, { once: false, amount: "all" });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

 
  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0 ? "fixed" : "relative";
  });


  let animationText = {};
  if (!stateSkills) {
    animationText = {
      background:
        "linear-gradient(to left, var(--lightBeige) 50%, #121212 50%) right",
      backgroundSize: "200%",
      backgroundPosition: isInView ? "left" : "right",
      transitionProperty: "background",
      transition: "1s ease-out",
    };
  } else {
    animationText = {
      background:
        "linear-gradient(to left, var(--lightBeige) 50%, #121212 50%) right",
      backgroundSize: "200%",
      backgroundPosition: stateSkills ? "right" : "left" ,
      opacity: stateSkills ? 0 : 1 ,
      transitionProperty: "background",
      transition: ".4s ease-out",
    };
  }

  return (
    <m.div ref={targetRef} className={props.class}>
      <m.div style={{ position }} className={classes.container__wrapper}>
        <AnimatePresence>
          <m.div
            ref={descriptionRef}
            className={classes.container__text}
            // animate={{display: state ? "none" : "flex"}}
            style={{
              opacity: isInView ? 1 : 0,
              transition: ".1s ease-in-out",
            }}
          >
            <m.h1 style={animationText}>{props.dataObject.number}</m.h1>
            <div className={classes.container__text__about}>
              <m.h2 ref={descriptionRef} style={animationText}>
                {props.dataObject.name}
              </m.h2>
              <m.h3 ref={descriptionRef} style={animationText}>
                {props.dataObject.job1}
                <span>&#x2022;</span>
                {props.dataObject.job2}
              </m.h3>
              <m.p ref={descriptionRef} style={animationText}>
                {props.dataObject.description}
              </m.p>
            </div>
            <m.h4 ref={descriptionRef} style={animationText}>
              Web App
            </m.h4>
          </m.div>
        </AnimatePresence>

        <div className={classes.container__images}>
          {props.photos.map(({ alt, src, y, x, scale }, i) => {
            return (
              <m.div
                key={i}
                style={{ y, right: x, scale }}
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
