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
        delay: 8,
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        stiffness: 20,
      }}
    >
      <h2>Hello</h2>
      <h1 className={classes.container__header}>
        My name <br></br>is<span> Gregori</span>
      </h1>
      <p>
        I build beautiful & interactive websites. Please take a look around!
      </p>
    </m.div>
  );
};

export default HeroAbout;
