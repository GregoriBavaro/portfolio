//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";

//Components
import NameSignSVG from "./NameSignSVG";

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
        <NameSignSVG />
      </m.div>
    </Fragment>
  );
};

export default LogoAnimation;
