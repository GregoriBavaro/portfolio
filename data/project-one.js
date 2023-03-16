import mobileOne from "../images/projectOne/mobile1.png";
import mobileTwo from "../images/projectOne/mobile2.png";
import tabletOne from "../images/projectOne/tablet2.png";
import tabletTwo from "../images/projectOne/tablet3.png";

import { useScroll, useTransform } from "framer-motion";

const ProjectOne = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.1, 1], ["250%", "-400%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["20%", "-400%"]);
  const yThree = useTransform(scrollYProgress, [0.1, 1], ["90%", "-400%"]);
  const yFour = useTransform(scrollYProgress, [0.1, 1], ["-40%", "-400%"]);
  const x = useTransform(scrollYProgress, [1 , 1], ["20%", "20%"]);
  const xTwo = useTransform(scrollYProgress, [1 , 1], ["0%", "0%"]);
  const xThree = useTransform(scrollYProgress, [1 , 1], ["0%", "0%"]);
  const xFour = useTransform(scrollYProgress, [1 , 1], ["9%", "9%"]);
  
 

  const projectOnePhotos = [
    { 
      alt: "mobile view",
      src: mobileOne,
      y: y,
      x: x,
      scale: 1.1
    },
    {
      alt: "mobile view",
      src: mobileTwo,
      y: yTwo,
      x: xTwo,
      scale: 1.2
    },
    {
      alt: "tablet view",
      src: tabletOne,
      y: yThree,
      x: xThree,
      scale: 0.9
    },
    {
      alt: "tablet view",
      src: tabletTwo,
      y: yFour,
      x: xFour,
      scale: 0.8
    },
   
  ];

  return { projectOnePhotos: projectOnePhotos };
};

export default ProjectOne;
