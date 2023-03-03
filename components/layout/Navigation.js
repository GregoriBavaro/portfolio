//Hooks
import { useState, Fragment } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { motion as m, AnimatePresence } from "framer-motion";

//Data
import menuList from "../../data/data.json";

//CSS
import classes from "./Navigation.module.css";

const Navigation = () => {
  const links = [...menuList.menuItems];
  const [isOpen, setOpen] = useState(false);

  //animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <m.nav
              className={classes.nav}
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "80%", opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit="exit"
            >
              <ul>
                {links.map(({ index, name, url, animateDelay, exitDelay }) => {
                  return (
                    <m.li
                      key={index}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: animateDelay }}
                      exit={{
                        opacity: 0,
                        y: 90,
                        transition: {
                          ease: "easeInOut",
                          delay: exitDelay,
                        },
                      }}
                    >
                      <Link href={url}>{name}</Link>
                    </m.li>
                  );
                })}
              </ul>
            </m.nav>
          )}
        </AnimatePresence>
      </header>
    </Fragment>
  );
};

export default Navigation;
