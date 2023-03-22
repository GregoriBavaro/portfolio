//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";

//CSS
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <div className={classes.hero}>
        <m.div
          className={classes.heroJob}
          initial={{ scale: 1 }}
          animate={{ scale: [null, 1.2, 0] }}
          transition={{ delay: 3, duration: 1 }}
        >
        </m.div>
        <m.div
          className={classes.heroPresentation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5 }}
        >
        </m.div>
      </div>
    </Fragment>
  );
};

export default Hero;
