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

const Navigation = (props) => {
  const links = [...menuList.menuItems];
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").classList.add("overflow-hidden");
    } else {
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const navigationHandler = (e) => {
    setOpen(false);

    setTimeout(() => {
      if (e.target.innerText === "about") {
        console.log("about");
        props.refs[0].current?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.innerText === "projects") {
        props.refs[1].current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 2800);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <LogoAnimation />
        <m.div
          className={classes.hamburger}
          initial={{ x: "300%" }}
          animate={{ x: 0 }}
          transition={{ x: { delay: 6, duration: 1 } }}
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
                          onClick={navigationHandler}
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
