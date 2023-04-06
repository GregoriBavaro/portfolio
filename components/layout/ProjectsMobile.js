//Hooks
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//CSS
import classes from "./ProjectsMobile.module.css";
import "swiper/css";

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
        <span>&#x2022;</span>
        <h1>{props.dataObject.name}</h1>
        <div className={clicked ? classes.open : classes.close}>
          <ArrowDropDownIcon />
        </div>
      </div>
      {clicked && (
        <div className={classes.body}>
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
            <Swiper spaceBetween={50} slidesPerView={1}>
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
        </div>
      )}
    </div>
  );
};

export default ProjectsMobile;
