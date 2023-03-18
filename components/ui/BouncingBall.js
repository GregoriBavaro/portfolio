//Hooks
import { motion as m } from "framer-motion";

//CSS
import classes from "./BouncingBall.module.css";

const BouncingBall = () => {
  const bounceTransition = {
    width: {
      delay: 3.3,
      duration: 2,
      ease: "easeInOut",
    },
    backgroundColor: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
    borderRadius: {
      delay: 5
    }
  };

  return (
    <m.span
      className={classes.ballStyle}
      transition={bounceTransition}
      animate={{
        scale: [null, 0.8, 310],
        backgroundColor: "rgb(18, 18, 18)",
        borderRadius: 0
      }}
    ></m.span>
  );
};

export default BouncingBall;
