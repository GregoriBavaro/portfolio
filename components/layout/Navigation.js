//Hooks
import { useState, Fragment } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";

//Components
import DivAnimations from "../ui/DivAnimations";

//Data
import menuList from "../../data/data.json";

//CSS
import classes from "./Navigation.module.css";

const Navigation = () => {
  const links = [...menuList.menuItems];
  const [isOpen, setOpen] = useState(false);
  

  

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.hamburger}>
          <Hamburger
            color="var(--lightBeige)"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <div>
              <DivAnimations />
              <nav className={classes.nav}>
                <ul>
                  {links.map(
                    ({ index, name, url, animateDelay, exitDelay }) => {
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
                          <Link href={url}>
                            <div>
                              <m.h4>{name}</m.h4>
                            </div>
                          </Link>
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
