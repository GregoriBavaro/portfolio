//Hooks
import { useScroll, useTransform } from "framer-motion";
import useWindowSize from "../components/hooks/use-windowDimensions";
import { useEffect, useState } from "react";

//Photos
import mobileOne from "../images/projectOne/mobile1.png";
import mobileTwo from "../images/projectOne/mobile2.png";
import tabletOne from "../images/projectOne/tablet2.png";
import tabletTwo from "../images/projectOne/tablet1.png";
import mobileFour from "../images/projectOne/mobile4.png";
import mobileFive from "../images/projectOne/mobile5.png";

const ProjectOne = () => {
  const { scrollYProgress } = useScroll();
  const size = useWindowSize();

  const [itemOneSettings, setItemOneSettings] = useState({
    x: "-5%",
    yTop: "60%",
    yBottom: "-360%",
    img: tabletOne,
    scale: 0.9,
  }); // Item 0ne //

  const [itemTwoSettings, setItemTwoSettings] = useState({
    x: "-6%",
    yTop: "80%",
    yBottom: "-380%",
    scale: 0.8,
  }); // Item Two //

  const [itemThreeSettings, setItemThreeSettings] = useState({
    x: "50%",
    yTop: "290%",
    yBottom: "-400%",
    scale: 1,
  }); // Item Three //

  const [itemFourSettings, setItemFourSettings] = useState({
    x: "5%",
    yTop: "250%",
    yBottom: "-370%",
    img: tabletTwo,
    scale: 1,
  }); // Item Four //

  //---------------------------------------------------------------------------------------------------------------//

  useEffect(() => {
    if (size.width < 1314) {
      setItemOneSettings({
        x: "22%",
        yTop: "60%",
        yBottom: "-450%",
        img: mobileFour,
        scale: 0.9,
      }); // Item One //
      setItemTwoSettings({
        x: "8%",
        yTop: "80%",
        yBottom: "-380%",
        scale: 0.8,
      }); // Item Two //
      setItemThreeSettings({
        x: "30%",
        yTop: "210%",
        yBottom: "-460%",
        scale: 0.8,
      }); // Item Three //
      setItemFourSettings({
        x: "5%",
        yTop: "250%",
        yBottom: "-370%",
        img: mobileFive,
        scale: 0.9,
      }); // Item Four //
    } else {
      setItemOneSettings({
        x: "-5%",
        yTop: "60%",
        yBottom: "-360%",
        img: tabletOne,
        scale: 0.9,
      }); // Item One //
      setItemTwoSettings({
        x: "-6%",
        yTop: "80%",
        yBottom: "-380%",
        scale: 0.8,
      }); // Item Two //
      setItemThreeSettings({
        x: "50%",
        yTop: "290%",
        yBottom: "-400%",
        scale: 1,
      }); // Item Three //
      setItemFourSettings({
        x: "5%",
        yTop: "250%",
        yBottom: "-370%",
        img: tabletTwo,
        scale: 1,
      }); // Item Two //
    }
    if (size.width < 800) {
      setItemFourSettings({
        x: "5%",
        yTop: "250%",
        yBottom: "-480%",
        img: mobileFive,
        scale: 0.9,
      }); // Item Two //
    }
    if (size.width < 580) {
      setItemOneSettings({
        x: "-6%",
        yTop: "60%",
        yBottom: "-420%",
        img: mobileFour,
        scale: 0.7,
      }); // Item One //
      setItemTwoSettings({
        x: "-6%",
        yTop: "150%",
        yBottom: "-500%",
        scale: 0.7,
      }); // Item Two //
      setItemThreeSettings({
        x: "-6%",
        yTop: "390%",
        yBottom: "-640%",
        scale: 0.7,
      }); // Item Three //
      setItemFourSettings({
        x: "-6%",
        yTop: "250%",
        yBottom: "-540%",
        img: mobileFive,
        scale: 0.7,
      }); // Item Four //
    }
  }, [size.width]);

  const y = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemOneSettings.yTop, itemOneSettings.yBottom] // Item One //
  );
  const yTwo = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemTwoSettings.yTop, itemTwoSettings.yBottom] // Item Two //
  );
  const yThree = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemThreeSettings.yTop, itemThreeSettings.yBottom]
  );
  const yFour = useTransform(
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
  const xFour = useTransform(
    scrollYProgress,
    [1, 1],
    [itemFourSettings.x, itemFourSettings.x]
  );

  const projectOnePhotos = [
    {
      alt: "mobile view",
      src: itemOneSettings.img,
      y: y,
      x: x,
      scale: itemOneSettings.scale,
    },
    {
      alt: "mobile view",
      src: mobileTwo,
      y: yTwo,
      x: xTwo,
      scale: itemTwoSettings.scale,
    },
    {
      alt: "tablet view",
      src: itemFourSettings.img,
      y: yFour,
      x: xFour,
      scale: itemFourSettings.scale,
    }, // Item Four //
    {
      alt: "tablet view",
      src: mobileOne,
      y: yThree,
      x: xThree,
      scale: itemThreeSettings.scale,
    }, // Item Three //
  ];

  return { projectOnePhotos: projectOnePhotos };
};

export default ProjectOne;
