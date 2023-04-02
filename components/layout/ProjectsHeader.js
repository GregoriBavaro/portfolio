//Hooks
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react"

//CSS
import classes from "./ProjectsHeader.module.css";

const developerItems = [
  {
    letter: "P",
    delay: 0.2,
  },
  {
    letter: "R",
    delay: 0.3,
  },
  {
    letter: "O",
    delay: 0.4,
  },
  {
    letter: "J",
    delay: 0.5,
  },
  {
    letter: "E",
    delay: 0.6,
  },
  {
    letter: "C",
    delay: 0.7,
  },
  {
    letter: "T",
    delay: 0.8,
  },
  {
    letter: "S",
    delay: 0.8,
  },
];

const ProjectsHeader = () => {
  const ref = useRef(false);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.text__projects}>
        {isInView && developerItems.map(({ letter, delay }, i) => {
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
    </div>
  );
};

export default ProjectsHeader;
