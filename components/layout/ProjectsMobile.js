//Hooks
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion as m, AnimatePresence } from "framer-motion";

//Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//CSS
import classes from "./ProjectsMobile.module.css";
import "swiper/css";
import "swiper/css/pagination";

const ProjectsMobile = (props) => {
  const [clicked, setClicked] = useState(false);

  const buttonExpendHandler = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className={props.container}>
      <div onClick={buttonExpendHandler} className={classes.header}>
        <div>{props.dataObject.numberMobile}</div>
        <h1>{props.dataObject.name}</h1>
        <div className={classes.close}>
          <m.div animate={{ rotate: clicked ? 180 : 0 }}>
            <ExpandMoreIcon />
          </m.div>
        </div>
      </div>
      <AnimatePresence>
        {clicked && (
          <m.div
            className={classes.body}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              opacity: { duration: 0.4, delay: 0.3 },
              y: { delay: 0.1, duration: 0.6 },
            }}
          >
            <div className={classes.text}>
              <h3>{props.dataObject.job1}</h3>
              <p>{props.dataObject.description}</p>
              <div className={classes.container__button__wrapper}>
                <div className={classes.contact__me}>
                  <a href={props.dataObject.link} target="_blank">
                    {props.dataObject.buttonName}
                  </a>
                  <a href={props.dataObject.link} target="_blank">
                    {props.dataObject.buttonName}
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.photos}>
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {props.photos.map(({ src, alt }, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={classes.photo__wrapper}>
                        <img src={src} alt={alt} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsMobile;
