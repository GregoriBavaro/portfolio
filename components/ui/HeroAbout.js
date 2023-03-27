//Hooks
import { motion as m } from "framer-motion";

//CSS
import classes from "./HeroAbout.module.css";

const HeroAbout = () => {
  return (
    <m.div
      className={classes.container}
      initial={{ x: "-300%" }}
      animate={{ x: "0" }}
      transition={{
        delay: 6,
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        stiffness: 20,
      }}
    >
      <div className={classes.text}>
        <h3 className={classes.text__uppercase}>
          <span className={classes.text__line}>Hello</span>
          <br />
          <span className={classes.text__line}>
            I'am <span> Gregori</span>
          </span>
          <br />
        </h3>
        <div className={classes.text__bottom}>
          <h3>
            I build beautiful & interactive websites
          </h3>
        </div>
      </div>
    </m.div>
  );
};

export default HeroAbout;
