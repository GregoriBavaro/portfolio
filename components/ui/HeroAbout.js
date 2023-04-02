//Hooks
import { motion as m } from "framer-motion";
import useWindowSize from "../hooks/use-windowDimensions";
import { useState, useEffect } from "react";

//Components
import CircleColorsSvg from "./CircleColorsSvg";
import NumberIncAnimation from "./NumberIncAnimation";
import WaveSvg from "./WaveSvg";

//CSS
import classes from "./HeroAbout.module.css";

const developer = ["D", "E", "V", "E", "L", "O", "P", "E", "R"]

const HeroAbout = () => {
  const [svg, setSvg] = useState(
    <div className={classes.container__two__svg}>
      <CircleColorsSvg />
    </div>
  );
  const size = useWindowSize();
  let todayDay = new Date().toLocaleString("en-US", { day: "2-digit" });
  let parsedDay = parseInt(todayDay);

  useEffect(() => {
    if (size.width < 1460) {
      setSvg(
        <m.div
          className={classes.container__two__svg__wave}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 4.7, duration: 0.3 }}
        >
          <WaveSvg />
        </m.div>
      );
    } else {
      setSvg(
        <div className={classes.container__two__svg}>
          <CircleColorsSvg />
        </div>
      );
    }
  }, [size.width]);

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
          {developer.map((letter, i) => {
            return <span key={i}>{letter}</span>
          })}
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
        {svg}
      </m.div>
    </div>
  );
};

export default HeroAbout;
