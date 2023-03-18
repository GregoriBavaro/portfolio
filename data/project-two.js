import desktopOne from "../images/projectTwo/desktop1.png";
import desktopTwo from "../images/projectTwo/desktop2.png";
import mobileTwo from "../images/projectTwo/mobile2.png";
import tabletTwo from "../images/projectTwo/tablet2.png";
import tabletThree from "../images/projectTwo/tablet3.png";
import mobile from "../images/projectTwo/mobile.png";

import { useScroll, useTransform } from "framer-motion";

const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.1, 1], ["150%", "-200%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["240%", "-250%"]);
  const yThree = useTransform(scrollYProgress, [0.1, 1], ["300%", "-150%"]);
  const yFour = useTransform(scrollYProgress, [0.1, 1], ["500%", "-80%"]);
  const yFive = useTransform(scrollYProgress, [0.1, 1], ["650%", "10%"]);
  const ySix = useTransform(scrollYProgress, [0.1, 1], ["500%", "-250%"]);
  const x = useTransform(scrollYProgress, [1, 1], ["7%", "7%"]);
  const xTwo = useTransform(scrollYProgress, [1, 1], ["60%", "60%"]);
  const xThree = useTransform(scrollYProgress, [1, 1], ["10%", "10%"]);
  const xFour = useTransform(scrollYProgress, [1, 1], ["0%", "0%"]);
  const xFive = useTransform(scrollYProgress, [1, 1], ["-10%", "-10%"]);
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
