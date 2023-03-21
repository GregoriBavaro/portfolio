//Hooks
import { Context } from "../hooks/Store"
import { useRef, useState, useContext, useEffect } from "react";
import {
  motion as m,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

//CSS
import classes from "../layout/Skills.module.css";

const Skills = () => {
  const [state , setState ] = useContext(Context)
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const [value, setValue] = useState();
  const isInView = useInView(targetRef, { once: false });


  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest - 650);
  });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 0 ? "fixed" : "relative";
  });

  // console.log(isInView);
  
  useEffect(() => {
    setState(isInView)
  }, [isInView])

  return (
    <div ref={targetRef} className={classes.container}>
      <m.div
        style={{ position }}
        className={classes.container__wrapper}
      ></m.div>
      <m.div
        className={classes.container__header}
        initial={{ x: -600 }}
        animate={{ x: value }}
        transition={{ duration: 1 }}
      ></m.div>
    </div>
  );
};

export default Skills;
