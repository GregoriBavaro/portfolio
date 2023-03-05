//Components
import WaveAnimation from "./WaveAnimation";


//CSS
import classes from "./Hero.module.css";

const Hero = () => {
 

  return (
    <div className={classes.hero}>
      <WaveAnimation />
    </div>
  );
};

export default Hero;
