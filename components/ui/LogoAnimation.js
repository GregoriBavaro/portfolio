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
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 0 }}
        transition={{opacity: {duration: 1}, scale: {delay: 5} }}
      >
        {size.width > 1000 && <NameSignSVG />}
        {size.width < 1000 && <MobileLogoAnime />}
      </m.div>
    </Fragment>
  );
};

export default LogoAnimation;
