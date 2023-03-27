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
  const isInView = useInView(descriptionRef, { once: false, amount: "some" });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0 ? "fixed" : "relative";
  });

  console.log(isInView);

  let classAnimation = {};

  if (isInView) {
    classAnimation = {
      scale: 1,
      transition: ".4s ease-out",
    };
  } else {
    classAnimation = { scale: 0, transition: ".4s ease-out" };
  }
  if (stateSkills) {
    classAnimation = {
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
            <div className={classes.container__3D}>
              {props.dataObject.number}
            </div>
            <div className={classes.container__text__about}>
              <div className={classes.text}>
                <h3 className={classes.text__uppercase}>
                  <span className={classes.text__line}>
                    {props.dataObject.name}
                  </span>
                  <br />
                  <span className={classes.text__line}>
                    {props.dataObject.job1}
                    <span>&#x2022;</span>
                    {props.dataObject.job2}
                  </span>
                  <br />
                </h3>
                <div className={classes.text__bottom}>
                  <h3>{props.dataObject.description}</h3>
                </div>
              </div>
            </div>
            <h4>Web App</h4>
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
