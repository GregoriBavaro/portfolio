//Hooks
import { motion as m } from "framer-motion";

//CSS
import classes from "./BouncingBall.module.css";

const BouncingBall = () => {
  const bounceTransition = {
    scale: {
      delay: 4.8,
      duration: 1.7,
      ease: "easeInOut",
    },
    backgroundColor: {
      delay: 5.2,
      duration: 1.3,
      ease: "easeInOut",
    },
    borderRadius: {
      delay: 6
    }
  };

  return (
    <m.span
      className={classes.ballStyle}
      transition={bounceTransition}
      animate={{
        scale: [null, 0.8, 500],
        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: 0
      }}
    ></m.span>
  );
};

export default BouncingBall;
