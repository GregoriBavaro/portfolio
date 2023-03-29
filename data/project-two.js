import desktopOne from "../images/projectTwo/desktop1.png";
import desktopTwo from "../images/projectTwo/desktop2.png";
import mobileTwo from "../images/projectTwo/mobile2.png";
import mobile from "../images/projectTwo/mobile.png";

import { useScroll, useTransform } from "framer-motion";

const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.1, 1], ["290%", "-200%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["400%", "-220%"]);
  const yThree = useTransform(scrollYProgress, [0.1, 1], ["780%", "-250%"]);
  const ySix = useTransform(scrollYProgress, [0.1, 1], ["880%", "-260%"]);
  const x = useTransform(scrollYProgress, [1, 1], ["7%", "7%"]);
  const xTwo = useTransform(scrollYProgress, [1, 1], ["60%", "60%"]);
  const xThree = useTransform(scrollYProgress, [1, 1], ["10%", "10%"]);
  const xSix = useTransform(scrollYProgress, [1, 1], ["-5%", "-5%"]);
 

  const projectTwoPhotos = [
    {
      alt: "desktop view",
      src: desktopTwo,
      y: y,
      x: x,
      scale: 1.2,
    },
    {
      alt: "mobile view",
      src: mobile,
      y: yTwo,
      x: xTwo,
      scale: 0.7,
    },
    {
      alt: "desktop view",
      src: desktopOne,
      y: yThree,
      x: xThree,
      scale: 1.2,
    },
    {
      alt: "mobile view",
      src: mobileTwo,
      y: ySix,
      x: xSix,
      scale: 0.7,
      className: "projectTwoLastPhoto"
    }
  ];

  return { projectTwoPhotos: projectTwoPhotos };
};

export default ProjectTwo;
