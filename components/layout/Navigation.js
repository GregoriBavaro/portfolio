//Hooks
import { useState, Fragment, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";

//Components
import DivAnimations from "../ui/DivAnimations";
import LogoAnimation from "../ui/LogoAnimation";

//Data
import menuList from "../../data/data.json";

//CSS
import classes from "./Navigation.module.css";

const Navigation = () => {
  const links = [...menuList.menuItems];
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").classList.add("overflow-hidden");
    } else {
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <Fragment>
      <header className={classes.header}>
        <LogoAnimation />
        <m.div
          className={classes.hamburger}
          initial={{ x: "300%" }}
          animate={{ x: 0 }}
          transition={{ x: { delay: 7, duration: 1 } }}
        >
          <Hamburger
            color="var(--lightBeige)"
            toggled={isOpen}
            toggle={setOpen}
          />
        </m.div>
        <AnimatePresence>
          {isOpen && (
            <div>
              <DivAnimations />
              <nav className={classes.nav}>
                <ul>
                  {links.map(
                    ({ index, name, url, animateDelay, exitDelay, clr }) => {
                      return (
                        <m.li
                          key={index}
                          initial={{ y: -80, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: animateDelay }}
                          exit={{
                            opacity: 0,
                            y: -90,
                            transition: {
                              ease: "easeOut",
                              delay: exitDelay,
                            },
                          }}
                        >
                          <div className={classes[clr]}>
                            <h4>{name}</h4>
                          </div>
                        </m.li>
                      );
                    }
                  )}
                </ul>
              </nav>
            </div>
          )}
        </AnimatePresence>
      </header>
    </Fragment>
  );
};

export default Navigation;
