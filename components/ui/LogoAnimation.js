//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";

//CSS
import classes from "./LogoAnimation.module.css";
const LogoAnimation = () => {
  return (
    <Fragment>
      <m.div
        className={classes.logoInitial}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h3>Gregori Bavaro</h3>
      </m.div>
      <m.p className={classes.job}
        >Front-end Developer & Code Geek</m.p>
    </Fragment>
  );
};

export default LogoAnimation;
