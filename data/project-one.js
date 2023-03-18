import mobileOne from "../images/projectOne/mobile1.png";
import mobileTwo from "../images/projectOne/mobile2.png";
import tabletOne from "../images/projectOne/tablet2.png";
import tabletTwo from "../images/projectOne/tablet1.png";

import { useScroll, useTransform } from "framer-motion";

const ProjectOne = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.1, 1], ["10%", "-400%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["50%", "-600%"]);
  const yThree = useTransform(scrollYProgress, [0.1, 1], ["290%", "-660%"]);
  const yFour = useTransform(scrollYProgress, [0.1, 1], ["220%", "-600%"]);
  const x = useTransform(scrollYProgress, [1, 1], ["-5%", "-5%"]);
  const xTwo = useTransform(scrollYProgress, [1, 1], ["-6%", "-6%"]);
  const xThree = useTransform(scrollYProgress, [1, 1], ["50%", "50%"]);
  const xFour = useTransform(scrollYProgress, [1, 1], ["5%", "5%"]);

  const projectOnePhotos = [
    {
      alt: "mobile view",
      src: tabletOne,
      y: y,
      x: x,
      scale: 0.9,
    },
    {
      alt: "mobile view",
      src: mobileTwo,
      y: yTwo,
      x: xTwo,
      scale: 0.8,
    },
    {
      alt: "tablet view",
      src: tabletTwo,
      y: yFour,
      x: xFour,
      scale: 1,
    },
    {
      alt: "tablet view",
      src: mobileOne,
      y: yThree,
      x: xThree,
      scale: 1,
    },
  ];

  return { projectOnePhotos: projectOnePhotos };
};

export default ProjectOne;
