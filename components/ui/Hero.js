//Hooks
import { motion as m } from "framer-motion";
import { Fragment } from "react";

//Components
import Canvas from "./Canvas";
import BouncingBall from "./BouncingBall";

//CSS
import classes from "./Hero.module.css";

//Data
import { heroIcons } from "../../data/hero-icons";

const Hero = () => {
  return (
    <Fragment>
      {/* <BouncingBall /> */}
      <div className={classes.hero}>
        <m.div
          className={classes.heroJob}
          initial={{ scale: 1 }}
          animate={{ scale: [null, 1.2, 0] }}
          transition={{ delay: 3, duration: 1 }}
        >
        </m.div>
        <m.div
          className={classes.heroPresentation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5 }}
        >
          
          {/* <div className={classes.heroIconsContainer}>
            {heroIcons.map((item, i) => {
              return (
                <m.div
                  key={i}
                  className={classes.heroIcons}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 8 }}
                >
                  <m.div
                    className={classes.heroIconWrapper}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: item.delay, duration: item.duration }}
                  >
                    <img src={item.icon.src} />
                  </m.div>
                  <m.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 9.7, duration: 1 }}
                  >
                    {item.text}
                  </m.p>
                </m.div>
              );
            })}
          </div> */}

          {/* <m.div
            className={classes.heroIam}
            initial={{ scale: 0 }}
            animate={{ scale: [null, 1.01, 1] }}
            transition={{ delay: 7.5 }}
          >
            <h2>
              Hi, I am Gregori, nice to meet you. I build beautiful &
              interactive websites. Please take a look around!
            </h2>
          </m.div> */}
          {/* <m.div
            className={classes.heroAboutMe}
            initial={{ scale: 0 }}
            animate={{ scale: [null, 1.1, 1] }}
            transition={{ delay: 7.5 }}
          >
            <p>
              I am Creative and skillful front-end web developer with a passion
              for design and creating elegant solutions. I care deeply about
              user experience with a serious passion for UI design and new
              technologies.I love to create beautiful and performant products
              with delightful user experiences.
            </p>
          </m.div> */}
        </m.div>
      </div>
    </Fragment>
  );
};

export default Hero;
