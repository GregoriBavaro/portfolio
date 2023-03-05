//Hooks
import { Fragment } from "react";
import { motion as m } from "framer-motion";

//Data
import menuList from "../../data/data.json";

const DivAnimations = () => {
  const elements = [...menuList.navbarAnimatedElements];

  return (
    <Fragment>
      {elements.map(
        ({
          classDiv,
          animateDelay,
          animateDuration,
          exitDelay,
          exitDuration,
        }) => {
          return (
            <m.div
              key={classDiv}
              className={classDiv}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                delay: animateDelay,
                ease: "easeInOut",
                duration: animateDuration,
              }}
              exit={{
                x: "-100%",
                transition: {
                  ease: "easeInOut",
                  delay: exitDelay,
                  duration: exitDuration,
                },
              }}
            ></m.div>
          );
        }
      )}
    </Fragment>
  );
};

export default DivAnimations;
