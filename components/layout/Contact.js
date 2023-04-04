//Hooks
import { useRef, useContext, useEffect } from "react";
import { motion as m, useInView } from "framer-motion";
import { Context } from "../hooks/Store";

//CSS
import classes from "../layout/Contact.module.css";

//Data
import data from "../../data/data.json";

const lets = [
  {
    letter: "L",
    delay: 0.2,
  },
  {
    letter: "E",
    delay: 0.3,
  },
  {
    letter: "T'",
    delay: 0.4,
  },
  {
    letter: "S",
    delay: 0.5,
  },
];

const connect = [
  {
    letter: "C",
    delay: 0.6,
  },
  {
    letter: "O",
    delay: 0.7,
  },
  {
    letter: "N",
    delay: 0.8,
  },
  {
    letter: "N",
    delay: 0.9,
  },
  {
    letter: "E",
    delay: 1,
  },
  {
    letter: "C",
    delay: 1.1,
  },
  {
    letter: "T",
    delay: 1.2,
  },
];

const Contact = () => {
  const { contact } = useContext(Context);
  const [stateContact, setStateContact] = contact;
  const targetRef = useRef(null);
  const topics = [...data.talkAbout];

  const isInView = useInView(targetRef, { once: true, amount: "some" });
  const isInViewContact = useInView(targetRef, { once: false, amount: "some" });

  useEffect(() => {
    setStateContact(isInViewContact);
  }, [isInViewContact]);

  return (
    <div ref={targetRef} className={classes.container}>
      <div className={classes.madeBy}>
        <h3>Copyrights @ 2023 Gregori Bavaro</h3>
      </div>
      <div className={classes.container__wrapper}>
        <div className={classes.container__wrapper__text}>
          <div className={classes.text}>
            <div className={classes.text__connect}>
              {isInView && lets.map(({ letter, delay }, i) => {
                return (
                  <m.span
                    key={i}
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: delay, duration: 1 }}
                  >
                    {letter}
                  </m.span>
                );
              })}
            </div>
            <div className={classes.text__connect}>
              {isInView && connect.map(({ letter, delay }, i) => {
                return (
                  <m.span
                    key={i}
                    initial={{ y: "200%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: delay, duration: 1 }}
                  >
                    {letter}
                  </m.span>
                );
              })}
            </div>
            <div className={classes.text__bottom}>
              <h3>i'm always interested about</h3>
            </div>
          </div>
          {isInView && (
            <div className={classes.text__topics__wrapper}>
              {topics.map(({ href, name, animationDelay }, i) => {
                return (
                  <m.div
                    key={i}
                    className={classes.text__topics}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: animationDelay,
                    }}
                  >
                    <m.a href={href}>{name}</m.a>
                    <a href={href}>{name}</a>
                  </m.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
