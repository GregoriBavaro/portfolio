//Hooks
import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

//Components
import CanvasConnect from "../ui/CanvasConnect";

//CSS
import classes from "../layout/Contact.module.css";

import data from "../../data/data.json";

const Contact = () => {
  const targetRef = useRef(null);
  const topics = [...data.talkAbout];

  const isInView = useInView(targetRef, { once: true, amount: "all" });

  return (
    <div ref={targetRef} className={classes.container}>
      {/* <div className={classes.canvas}>
        <CanvasConnect />
      </div> */}
      <m.div className={classes.container__wrapper}>
        <div className={classes.container__wrapper__text}>
          <div className={classes.text}>
            <h3 className={classes.text__uppercase}>
              <span className={classes.text__line}>let's</span>
              <br />
              <span className={classes.text__line}>connect</span>
              <br />
            </h3>
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
      </m.div>
    </div>
  );
};

export default Contact;
