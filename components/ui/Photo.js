// import photo from "../../images/photo.png";
//Hooks
import { motion as m } from "framer-motion";

//CSS
import classes from "./Photo.module.css";

const Photo = () => {
  return (
    <m.div
      className={classes.person}
      initial={{ y: "-100%", x: "100%", rotate: "50deg" }}
      animate={{ y: "0", x: "0", rotate: "50deg" }}
      transition={{
        delay: 7,
        ease: "easeInOut",
        duration: 1,
        type: "spring",
        stiffness: 20,
      }}
    >
      <div className={classes.person__container}>
        <div className={classes.person__circle}></div>
        <m.img
          className={classes.person__img}
          initial={{ y: "100%", x: "100%", rotate: "310deg", scale: 1.2 }}
          animate={{ y: "0", x: "0", rotate: "310deg", scale: 1.2 }}
          transition={{
            delay: 8,
            ease: "easeInOut",
            duration: 2,
            type: "spring",
            stiffness: 20,
          }}
          src="\static\images\gregori.png"
        />
      </div>
    </m.div>
  );
};

export default Photo;
