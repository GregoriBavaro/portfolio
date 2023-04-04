//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";
import useWindowSize from "../hooks/use-windowDimensions";

//Components
import NameSignSVG from "./NameSignSVG";
import MobileLogoAnime from "./MobileLogoAnime";

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
        transition={{ duration: 1 }}
      >
        {size.width > 1000 && <NameSignSVG />}
        {size.width < 1000 && <MobileLogoAnime />}
      </m.div>
    </Fragment>
  );
};

export default LogoAnimation;
