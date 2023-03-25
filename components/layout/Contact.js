//Hooks
import { useRef } from "react";
import { motion as m } from "framer-motion";

//CSS
import classes from "../layout/Contact.module.css";

//Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

//Data
import data from "../../data/data.json";

const Contact = () => {
  const targetRef = useRef(null);
  const topics = [...data.talkAbout];

  return (
    <div ref={targetRef} className={classes.container}>
      <m.div className={classes.container__wrapper}>
        <m.div
          className={classes.wrapper__icons}
        >
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gregori-bavaro/" target="_blank">
                <LinkedInIcon sx={{ scale: "2" }} />
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/GregoriBavaro" target="_blank">
                <GitHubIcon sx={{ scale: "2" }} />
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gregoribavaro/" target="_blank">
                <InstagramIcon sx={{ scale: "2" }} />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100087660054820" target="_blank">
                <FacebookIcon sx={{ scale: "2" }} />
                Facebook
              </a>
            </li>
          </ul>
        </m.div>
        <div className={classes.container__wrapper__text}>
          <div className={classes.text}>
            <h3 className={classes.text__uppercase}>
              <span className={classes.text__line}>let's</span>
              <br />
              <span className={classes.text__line}>connect</span>
              <br />
            </h3>
            <div className={classes.text__bottom}>
              <h3>i'm always interested about</h3>
            </div>
          </div>
          <div className={classes.text__topics__wrapper}>
            {topics.map(({ href, name }, i) => {
              return (
                <div key={i} className={classes.text__topics}>
                  <a href={href}>{name}</a>
                  <a href={href}>{name}</a>
                </div>
              );
            })}
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Contact;
