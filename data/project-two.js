//Hooks
import { useScroll, useTransform } from "framer-motion";
import useWindowSize from "../components/hooks/use-windowDimensions";
import { useEffect, useState } from "react";

//Photos
import desktopOne from "../images/projectTwo/desktop1.png";
import desktopTwo from "../images/projectTwo/desktop2.png";
import mobileTwo from "../images/projectTwo/mobile2.png";
import mobile from "../images/projectTwo/mobile.png";
import mobileThree from "../images/projectTwo/mobile3.png";
import mobileFour from "../images/projectTwo/mobile4.png";

const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();
  const size = useWindowSize();

  const [itemOneSettings, setItemOneSettings] = useState({
    x: "7%",
    img: desktopTwo,
    scale: 1.2,
  }); // Item One //

  const [itemTwoSettings, setItemTwoSettings] = useState({
    x: "60%",
    scale: 0.7,
  }); // Item Two //

  const [itemThreeSettings, setItemThreeSettings] = useState({
    x: "13%",
    scale: 1.2,
    img: desktopOne,
    yTop: "780%",
    yBottom: "-250%",
  }); // Item Three //

  const [itemFourSettings, setItemFourSettings] = useState({
    x: "-5%",
    scale: 0.7,
    yTop: "880%",
    yBottom: "-260%",
  }); // Item Three //

  useEffect(() => {
    if (size.width < 1314) {
      setItemOneSettings({ x: "24%", img: mobileThree, scale: 0.9 }); // Item One //

      setItemTwoSettings({ x: "8%", scale: 0.8 }); // Item Two //

      setItemThreeSettings({
        x: "30%",
        scale: 0.9,
        img: mobileFour,
        yTop: "780%",
        yBottom: "-290%",
      }); // Item Three //

      setItemFourSettings({
        x: "6%",
        scale: 0.9,
        yTop: "880%",
        yBottom: "-250%",
      }); // Item Four //
    } else {
      setItemOneSettings({ x: "7%", img: desktopTwo, scale: 1.2 }); // Item One //

      setItemTwoSettings({ x: "60%", scale: 0.7 }); // Item Two //

      setItemThreeSettings({
        x: "13%",
        scale: 1.2,
        img: desktopOne,
        yTop: "780%",
        yBottom: "-250%",
      }); // Item Three //

      setItemFourSettings({
        x: "-5%",
        scale: 0.7,
        yTop: "880%",
        yBottom: "-260%",
      }); // Item Four //
    }
    if (size.width < 580) {
    }
  }, [size.width]);

  const y = useTransform(scrollYProgress, [0.1, 1], ["290%", "-200%"]);
  const yTwo = useTransform(scrollYProgress, [0.1, 1], ["400%", "-220%"]);
  const yThree = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemThreeSettings.yTop, itemThreeSettings.yBottom]
  );
  const ySix = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemFourSettings.yTop, itemFourSettings.yBottom]
  );
  const x = useTransform(
    scrollYProgress,
    [1, 1],
    [itemOneSettings.x, itemOneSettings.x]
  );
  const xTwo = useTransform(
    scrollYProgress,
    [1, 1],
    [itemTwoSettings.x, itemTwoSettings.x]
  );
  const xThree = useTransform(
    scrollYProgress,
    [1, 1],
    [itemThreeSettings.x, itemThreeSettings.x]
  );
  const xSix = useTransform(
    scrollYProgress,
    [1, 1],
    [itemFourSettings.x, itemFourSettings.x]
  );

  const projectTwoPhotos = [
    {
      alt: "desktop view",
      src: itemOneSettings.img,
      y: y,
      x: x,
      scale: itemOneSettings.scale,
    }, // Item One //
    {
      alt: "mobile view",
      src: mobile,
      y: yTwo,
      x: xTwo,
      scale: itemTwoSettings.scale,
    }, // Item Two //
    {
      alt: "desktop view",
      src: itemThreeSettings.img,
      y: yThree,
      x: xThree,
      scale: itemThreeSettings.scale,
    }, // Item Three //
    {
      alt: "mobile view",
      src: mobileTwo,
      y: ySix,
      x: xSix,
      scale: itemFourSettings.scale,
    }, // Item Four //
  ];

  return { projectTwoPhotos: projectTwoPhotos };
};

export default ProjectTwo;
