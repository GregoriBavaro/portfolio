//Hooks
import { useRef, useState} from "react";
import { motion as m, useScroll, useMotionValueEvent } from "framer-motion";

//CSS
import classes from "../layout/Contact.module.css";

const Contact = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const [value, setValue] = useState();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest - 6268);
  });

  return (
    <div ref={targetRef} className={classes.container}>
      <m.div className={classes.container__wrapper}>
        <m.div
          className={classes.container__header}
          initial={{ left: 0 }}
          animate={{ left: value }}
          transition={{ duration: 1 }}
        >
          <h1>Contact</h1>
        </m.div>
        <div className={classes.container__text}></div>
      </m.div>
    </div>
  );
};

export default Contact;
