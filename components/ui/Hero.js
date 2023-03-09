//Hooks
import { motion as m } from "framer-motion"

//Components
import WaveAnimation from "./WaveAnimation";

//CSS
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div>
        <p>Hi! I am Gregori.</p>
        <p>I am creative and skillful, front-end web developer with a</p>
        <p>passion for design and creating elegant solutions.</p>
      </div>
      <div className={classes.circle}>
        <WaveAnimation />
      </div>
    </div>
  );
};

export default Hero;
