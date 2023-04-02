//Hooks
import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

//Components
import { Canvas } from "../ui/Canvas";

//CSS
import classes from "../layout/About.module.css";

const developerItems = [
  {
    letter: "A",
    delay: 0.2,
  },
  {
    letter: "B",
    delay: 0.3,
  },
  {
    letter: "O",
    delay: 0.4,
  },
  {
    letter: "U",
    delay: 0.5,
  },
  {
    letter: "T",
    delay: 0.6,
  },
  {
    letter: "\u00A0",
    delay: 0.6,
  },
  {
    letter: "M",
    delay: 0.7,
  },
  ,
  {
    letter: "E",
    delay: 0.8,
  },
];

const About = () => {
  const targetRef = useRef();

  const isInView = useInView(targetRef, { once: true, amount: "some" });

  return (
    <m.div ref={targetRef} className={classes.container}>
      {isInView && (
        <div className={classes.text}>
          <div className={classes.text__aboutMe}>
            {developerItems.map(({ letter, delay }, i) => {
              return (
                <m.span
                  initial={{ y: "200%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: delay, duration: 1 }}
                  key={i}
                >
                  {letter}
                </m.span>
              );
            })}
          </div>
          <div className={classes.text__bottom}>
            <h3>
              I am Creative and skillful frontend web developer with a passion
              for design and creating elegant solutions. I care deeply about
              user experience with a serious passion for UI design and new
              technologies.I love to create beautiful and performant products
              with delightful user experiences.
            </h3>
          </div>
        </div>
      )}
      {isInView && (
        <m.div
          className={classes.threeD}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 2, 1] }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Canvas />
        </m.div>
      )}
    </m.div>
  );
};

export default About;
