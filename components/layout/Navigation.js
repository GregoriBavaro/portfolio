//Hooks
import { useState, Fragment, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";
import useWindowSize from "../hooks/use-windowDimensions";

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
  const [hamburgerSize, setHamburgerSize] = useState(30);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 600) {
      setHamburgerSize(25);
    } else {
      setHamburgerSize(30);
    }
  }, [size]);

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
        props.refs[0].current?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.innerText === "projects") {
        props.refs[1].current?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.innerText === "skills") {
        props.refs[2].current?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.innerText === "contact") {
        props.refs[3].current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 2800);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <LogoAnimation />
        <m.div
          className={classes.hamburger}
          initial={{ opacity: 0, x: "300%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { delay: 4, duration: 0.7 },
            opacity: { delay: 4, duration: 0.7 },
          }}
        >
          <Hamburger
            color="var(--lightBeige)"
            toggled={isOpen}
            toggle={setOpen}
            size={hamburgerSize}
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
