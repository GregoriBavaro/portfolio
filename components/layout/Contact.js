//Hooks
import { useRef, useState } from "react";
import { motion as m, useScroll, useMotionValueEvent } from "framer-motion";

//CSS
import classes from "../layout/Contact.module.css";

//Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const [value, setValue] = useState();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setValue(latest - 6268);
  });

  return (
    <div ref={targetRef} className={classes.container}>
      <m.div className={classes.container__wrapper}>
        <div className={classes.container__wrapper__icons}>
          <m.div
            initial={{ y: "100%" }}
            whileInView={{ y: "10%" }}
            className={classes.wrapper__icons}
          >
            <div className={classes.inside__icons}>
              <section>
                <span>
                  <LinkedInIcon sx={{ "&:hover": { color: "var(--green)" } }} />
                </span>
                <span>
                  <GitHubIcon sx={{ "&:hover": { color: "var(--green)" } }} />
                </span>
                <span>
                  <InstagramIcon
                    sx={{ "&:hover": { color: "var(--green)" } }}
                  />
                </span>
                <span>
                  <FacebookIcon sx={{ "&:hover": { color: "var(--green)" } }} />
                </span>
              </section>
            </div>
            <div className={classes.inside__line}></div>
          </m.div>
        </div>
        <div className={classes.container__wrapper__text}>
          <div className={classes.wrapper__text}>
            <h1>Get In Touch</h1>
            <p>
              I’m currently looking for new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <button>Say Hello</button>
          </div>
        </div>
        <div className={classes.container__wrapper__email}>
          <m.div
            initial={{ y: "100%" }}
            whileInView={{ y: "10%" }}
            className={classes.wrapper__email}
          >
            <div className={classes.inside__email}>
              <h4>greg.gego@gmail.com</h4>
            </div>
            <div className={classes.inside__line}></div>
          </m.div>
        </div>
      </m.div>
    </div>
  );
};

export default Contact;
