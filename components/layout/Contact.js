//Hooks
import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

import Canvas from "../ui/Canvas"

//CSS
import classes from "../layout/Contact.module.css";

//Data
import { icons } from "../../data/contact-icons";
import data from "../../data/data.json";

const Contact = () => {
  const targetRef = useRef(null);
  const topics = [...data.talkAbout];

  const isInView = useInView(targetRef, { once: true, amount: "all" });

  return (
    <div ref={targetRef} className={classes.container}>
      <div className={classes.canvas}>
        <Canvas />
      </div>
      <m.div className={classes.container__wrapper}>
        {isInView && (
          <m.div className={classes.wrapper__icons}>
            <ul>
              {icons.map(({ name, href, icon, animationDelay }, i) => {
                return (
                  <m.li
                    initial={{ y: "200%" }}
                    animate={{ y: "0" }}
                    transition={{ duration: 0.1, delay: animationDelay }}
                    key={i}
                  >
                    <a href={href} target="_blank">
                      {icon}
                      {name}
                    </a>
                  </m.li>
                );
              })}

              <li>
                <div className={classes.contact__me}>
                  <a href="mailto:greg.gego@gmail.com?subject=🖐️Hey!">
                    Contact me
                  </a>
                  <a href="mailto:greg.gego@gmail.com?subject=🖐️Hey!">
                    Contact me
                  </a>
                </div>
              </li>
            </ul>
          </m.div>
        )}

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
          <div className={classes.text__topics__wrapper}>
            {isInView &&
              topics.map(({ href, name, animationDelay }, i) => {
                return (
                  <m.div key={i} className={classes.text__topics}>
                    <m.a
                      initial={{ y: "100%" }}
                      animate={{ y: "0" }}
                      transition={{ duration: 0.1, delay: animationDelay }}
                      href={href}
                    >
                      {name}
                    </m.a>
                    <a href={href}>{name}</a>
                  </m.div>
                );
              })}
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Contact;
