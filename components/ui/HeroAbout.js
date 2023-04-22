//Hooks
import { motion as m } from "framer-motion";

//Components
import NumberIncAnimation from "./NumberIncAnimation";

//CSS
import classes from "./HeroAbout.module.css";

const developerItems = [
  {
    letter: "D",
    delay: 4,
  },
  {
    letter: "E",
    delay: 4.1,
  },
  {
    letter: "V",
    delay: 4.2,
  },
  {
    letter: "E",
    delay: 4.3,
  },
  {
    letter: "L",
    delay: 4.4,
  },
  {
    letter: "O",
    delay: 4.4,
  },
  {
    letter: "P",
    delay: 4.6,
  },
  ,
  {
    letter: "E",
    delay: 4.7,
  },
  {
    letter: "R",
    delay: 4.8,
  },
];

const HeroAbout = () => {
  let todayDay = new Date().toLocaleString("en-US", { day: "2-digit" });
  let parsedDay = parseInt(todayDay);

  return (
    <div className={classes.hero}>
      <m.div className={classes.container}>
        <div className={classes.text}>
          {developerItems.map(({ letter, delay }, i) => {
            return (
              <m.span
                initial={{ y: "200%" }}
                animate={{ y: "0%" }}
                transition={{ delay: delay, duration: 1 }}
                key={i}
              >
                {letter}
              </m.span>
            );
          })}
        </div>
      </m.div>
      <m.div
        className={classes.container__two}
      >
        <div className={classes.container__wrapper}>
          <div className={classes.container__two__day}>
            <m.span
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 5.2, duration: 1 }}
            >
              <NumberIncAnimation n={parsedDay} />
            </m.span>
          </div>
          <div className={classes.container__two__month}>
            <m.h1
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 5.2, duration: 1 }}
            >
              {new Date().toLocaleString("en-US", { month: "short" })}
            </m.h1>
            <m.p
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 5.7, duration: 0.4 }}
            >
              available <br></br> for work
            </m.p>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default HeroAbout;
