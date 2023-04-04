//Hooks
import { motion as m } from "framer-motion";

//Data
import { icons } from "../../data/contact-icons";

//CSS
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <m.div
      className={classes.container}
      initial={{ display: "none" }}
      animate={{ display: "inline-block" }}
      transition={{ delay: 6.8, duration: "1s ease-out" }}
    >
      <m.div className={classes.container__wrapper}>
        <m.div className={classes.wrapper__icons}>
          <ul>
            {icons.map(({ name, href, icon, animationDelay }, i) => {
              return (
                <m.li
                  initial={{ y: "200%" }}
                  animate={{ y: "0" }}
                  transition={{ duration: 0.1, delay: animationDelay }}
                  key={i}
                >
                  <a href={href} target="_blank">
                    {icon}
                    <span className={classes.nameOfIcon}>{name}</span>
                  </a>
                </m.li>
              );
            })}

            <li>
              <div className={classes.contact__me}>
                <a href="mailto:greg.gego@gmail.com?subject=🖐️Hey!">
                  Contact me
                </a>
                <a href="mailto:greg.gego@gmail.com?subject=🖐️Hey!">
                  Contact me
                </a>
              </div>
            </li>
          </ul>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Footer;
