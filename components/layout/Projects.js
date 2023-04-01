//Hooks
import { Context } from "../hooks/Store";
import { useRef, useContext} from "react";
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
  const { skills, contact } = useContext(Context);
  const [stateSkills] = skills;
  const [stateContact] = contact;
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

  let classAnimation = {};
  let classAnimationText = {};

  if (isInView) {
    classAnimation = {
      opacity: 1,
    };
    classAnimationText = {
      scale: 1,
      transition: ".4s ease-out",
    };
  } else {
    classAnimation = { opacity: 0 };
    classAnimationText = {
      scale: 0,
      transition: ".4s ease-out",
    };
  }
  if (stateSkills || stateContact) {
    classAnimation = {
      opacity: 0,
    };
    classAnimationText = {
      scale: 0,
      transition: ".4s ease-out",
    };
  }
  if (props.hideFirst) {
    classAnimation = {
      opacity: 0,
    };
    classAnimationText = {
      scale: 0,
      transition: ".4s ease-out",
    };
  }

  return (
    <m.div ref={targetRef} className={classes.container}>
      <m.div style={{ position }} className={classes.container__wrapper}>
        <AnimatePresence>
          <m.div
            ref={descriptionRef}
            className={classes.container__text}
            style={classAnimation}
          >
            <m.div style={classAnimationText} className={classes.container__3D}>
              <h1>{props.dataObject.number}</h1>
            </m.div>
            <div className={classes.container__text__about}>
              <div className={classes.text}>
                <m.h3
                  style={classAnimationText}
                  className={classes.text__uppercase}
                >
                  <span className={classes.text__line}>
                    {props.dataObject.name}
                  </span>
                  <br />
                  <span className={classes.text__line}>
                    {props.dataObject.job1}
                  </span>
                  <br />
                </m.h3>
                <m.div
                  style={classAnimationText}
                  className={classes.text__bottom}
                >
                  <h3>{props.dataObject.description}</h3>
                </m.div>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
        <div className={classes.container__images}>
          {props.photos.map(({ alt, src, y, x, scale, className }, i) => {
            return (
              <m.div
                key={i}
                style={{ y, right: x, scale }}
                className={classes.container__images__wrapper}
              >
                <img src={src.src} alt={alt} className={className} />
              </m.div>
            );
          })}
        </div>
      </m.div>
    </m.div>
  );
};

export default Projects;
