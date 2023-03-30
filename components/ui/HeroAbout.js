//Hooks
import { motion as m } from "framer-motion";

//Components
import CircleColorsSvg from "./CircleColorsSvg";
import NumberIncAnimation from "./NumberIncAnimation";

//CSS
import classes from "./HeroAbout.module.css";

const HeroAbout = () => {
  let todayDay = new Date().toLocaleString("en-US", { day: "2-digit" });
  let parsedDay = parseInt(todayDay);

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
            <m.span
              className={classes.text__line}
              initial={{ y: "55%" }}
              animate={{ y: 0 }}
              transition={{
                y: { delay: 4, duration: 0.8 },
              }}
            >
              Developer <span>&</span>
            </m.span>
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
            <h1>
              <NumberIncAnimation n={parsedDay} />
            </h1>
          </div>
          <div className={classes.container__two__month}>
            <h1>{new Date().toLocaleString("en-US", { month: "short" })}</h1>
            <p>
              available <br></br> for work
            </p>
          </div>
        </div>
        <div className={classes.container__two__svg}>
          <CircleColorsSvg />
        </div>
      </m.div>
    </div>
  );
};

export default HeroAbout;
