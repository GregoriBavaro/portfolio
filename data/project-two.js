import desktopOne from "../images/projectTwo/desktop1.png";
import desktopTwo from "../images/projectTwo/desktop2.png";
import tabletOne from "../images/projectTwo/tablet1.png";
import tabletTwo from "../images/projectTwo/tablet2.png";
import tabletThree from "../images/projectTwo/tablet3.png";
import mobile from "../images/projectTwo/mobile.png";

import { useScroll, useTransform } from "framer-motion";

const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.1, 1], ["300%", "-200%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["300%", "-320%"]);
  const yThree = useTransform(scrollYProgress, [0.1, 1], ["300%", "-340%"]);
  const yFour = useTransform(scrollYProgress, [0.1, 1], ["300%", "-350%"]);
  const yFive = useTransform(scrollYProgress, [0.1, 1], ["350%", "-400%"]);
  const x = useTransform(scrollYProgress, [1, 1], ["0%", "0%"]);
  const xTwo = useTransform(scrollYProgress, [1, 1], ["30%", "30%"]);
  const xThree = useTransform(scrollYProgress, [1, 1], ["-10%", "-10%"]);
  const xFour = useTransform(scrollYProgress, [1, 1], ["0%", "0%"]);
  const xFive = useTransform(scrollYProgress, [1, 1], ["10%", "10%"]);
 

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
      scale: 0.8,
    },
    {
      alt: "desktop view",
      src: desktopOne,
      y: yThree,
      x: xThree,
      scale: 1,
    },
    {
      alt: "tablet view",
      src: tabletThree,
      y: yFour,
      x: xFour,
      scale: 0.8,
    },
    {
      alt: "tablet view",
      src: tabletTwo,
      y: yFive,
      x: xFive,
      scale: 0.7,
    },
  ];

  return { projectTwoPhotos: projectTwoPhotos };
};

export default ProjectTwo;
