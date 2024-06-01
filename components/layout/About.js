//Hooks
import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

//img
import me from "../../public/static/images/gregori.png";

//CSS
import classes from "../layout/About.module.css";

const developerItems = [
  {
    letter: "A",
    delay: 0.2,
  },
  {
    letter: "B",
    delay: 0.3,
  },
  {
    letter: "O",
    delay: 0.4,
  },
  {
    letter: "U",
    delay: 0.5,
  },
  {
    letter: "T",
    delay: 0.6,
  },
  {
    letter: "\u00A0",
    delay: 0.6,
  },
  {
    letter: "M",
    delay: 0.7,
  },
  ,
  {
    letter: "E",
    delay: 0.8,
  },
];

const About = () => {
  const targetRef = useRef();

  const isInView = useInView(targetRef, { once: true, amount: "some" });

  return (
    <m.div ref={targetRef} className={classes.container}>
      {isInView && (
        <div className={classes.text}>
          <div className={classes.text__aboutMe}>
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
          <div className={classes.text__bottom}>
            <h3>
              Passionate React JavaScript Developer with over one year of
              freelance experience. Dedicated to crafting innovative and
              high-quality web solutions that elevate user experiences.
              Proficient in frontend development using React.js & Next.js, with
              a keen eye for detail and a drive for continuous learning. Skilled
              in collaborating with clients to understand their needs and
              deliver tailored solutions that exceed expectations. Committed to
              staying updated with the latest technologies and industry trends
              to consistently deliver top-notch results.
            </h3>
          </div>
        </div>
      )}
      {/* <div className={classes.threeD}>
        <Canvas />
      </div> */}
      <div className={classes.photo__container}>
        <div className={classes.person__container}>
          <div className={classes.person__circle} />
          <div />
          <img className={classes.person__img} src={me.src} alt="" />
        </div>
      </div>
    </m.div>
  );
};

export default About;
