//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";
import useWindowSize from "../hooks/use-windowDimensions";

//Components
import NameSignSVG from "./NameSignSVG";
import ShortNameSvg from "./ShotNameSvg";

//CSS
import classes from "./LogoAnimation.module.css";

const LogoAnimation = () => {
  const size = useWindowSize();

  return (
    <Fragment>
      <m.div
        className={classes.logoInitial}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {size.width > 740 && <NameSignSVG />}
        {size.width < 740 && <ShortNameSvg />}
      </m.div>
    </Fragment>
  );
};

export default LogoAnimation;
