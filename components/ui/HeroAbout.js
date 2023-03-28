//Hooks
import { motion as m } from "framer-motion";

//CSS
import classes from "./HeroAbout.module.css";

const HeroAbout = () => {
  return (
    <div className={classes.hero}>
      <m.div
        className={classes.container}
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        transition={{
          x: { delay: 3.5, duration: 0.8 },
        }}
      >
        <div className={classes.text}>
          <h3 className={classes.text__uppercase}>
            <span className={classes.text__line}>
              Developer <span>&</span>
            </span>
            <br />
          </h3>
          <div className={classes.text__bottom}>
            <h3>Code geek</h3>
          </div>
        </div>
      </m.div>
      <m.div
        className={classes.container__two}
        initial={{ x: "200%" }}
        animate={{ x: 0 }}
        transition={{
          x: { delay: 3.5, duration: 0.8 },
        }}
      >
        <div className={classes.container__wrapper}>
          <div className={classes.container__two__day}>
            <h1>{new Date().toLocaleString("en-US", { day: "2-digit" })}</h1>
          </div>
          <div className={classes.container__two__month}>
            <h1>{new Date().toLocaleString("en-US", { month: "short" })}</h1>
            <p>
              available <br></br> for work
            </p>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default HeroAbout;
