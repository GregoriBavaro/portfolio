//Hooks
import { useScroll, useTransform } from "framer-motion";
import useWindowSize from "../components/hooks/use-windowDimensions";
import { useEffect, useState } from "react";

//Photos
// import mobileOne from "/images/projectOne/mobile1.png";
// import mobileTwo from "/images/projectOne/mobile2.png";
// import tabletOne from "/images/projectOne/tablet2.png";
// import tabletTwo from "/images/projectOne/tablet1.png";
// import mobileFour from "/images/projectOne/mobile4.png";
// import mobileFive from "/images/projectOne/mobile5.png";

const ProjectOne = () => {
  const { scrollYProgress } = useScroll();
  const size = useWindowSize();

  const [itemOneSettings, setItemOneSettings] = useState({
    x: "5%",
    yTop: "170%",
    yBottom: "-360%",
    img: "https://i.postimg.cc/1XwQvYsD/tablet2.png",
    scale: 0.8,
  }); // Item 0ne //

  const [itemTwoSettings, setItemTwoSettings] = useState({
    x: "5%",
    yTop: "220%",
    yBottom: "-410%",
    scale: 0.8,
  }); // Item Two //

  const [itemThreeSettings, setItemThreeSettings] = useState({
    x: "40%",
    yTop: "380%",
    yBottom: "-400%",
    scale: 0.8,
  }); // Item Three //

  const [itemFourSettings, setItemFourSettings] = useState({
    x: "5%",
    yTop: "400%",
    yBottom: "-370%",
    img: "https://i.postimg.cc/vTWJrgtz/tablet1.png",
    scale: 0.8,
  }); // Item Four //

  //---------------------------------------------------------------------------------------------------------------//

  useEffect(() => {
    if (size.width < 1520) {
      setItemOneSettings({
        x: "45%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/2SdsbZS8/mobile2.png",
        scale: 0.8,
      }); // Item One //
      setItemTwoSettings({
        x: "2%",
        yTop: "220%",
        yBottom: "-420%",
        scale: 0.8,
      }); // Item Two //
      setItemThreeSettings({
        x: "43%",
        yTop: "380%",
        yBottom: "-430%",
        scale: 0.8,
      }); // Item Three //
      setItemFourSettings({
        x: "3%",
        yTop: "460%",
        yBottom: "-480%",
        img: "https://i.postimg.cc/P5cSqfmr/mobile5.png",
        scale: 0.8,
      }); // Item Four //
    } else {
      setItemOneSettings({
        x: "5%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/1XwQvYsD/tablet2.png",
        scale: 0.8,
      }); // Item One //
      setItemTwoSettings({
        x: "5%",
        yTop: "220%",
        yBottom: "-410%",
        scale: 0.8,
      }); // Item Two //
      setItemThreeSettings({
        x: "40%",
        yTop: "380%",
        yBottom: "-400%",
        scale: 0.8,
      }); // Item Three //
      setItemFourSettings({
        x: "5%",
        yTop: "400%",
        yBottom: "-370%",
        img: "https://i.postimg.cc/vTWJrgtz/tablet1.png",
        scale: 0.8,
      }); // Item Two //
    }
    if (size.width < 1120) {
      setItemOneSettings({
        x: "23%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/2SdsbZS8/mobile2.png",
        scale: 0.7,
      }); // Item One //
      setItemTwoSettings({
        x: "0%",
        yTop: "220%",
        yBottom: "-410%",
        scale: 0.7,
      }); // Item Two //
      setItemThreeSettings({
        x: "23%",
        yTop: "330%",
        yBottom: "-400%",
        scale: 0.7,
      }); // Item Three //
      setItemFourSettings({
        x: "0%",
        yTop: "380%",
        yBottom: "-430%",
        img: "https://i.postimg.cc/P5cSqfmr/mobile5.png",
        scale: 0.7,
      }); // Item Four //
    }
    if (size.width < 820) {
      setItemOneSettings({
        x: "70%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/2SdsbZS8/mobile2.png",
        scale: 0.6,
      }); // Item One //
      setItemTwoSettings({
        x: "2%",
        yTop: "220%",
        yBottom: "-410%",
        scale: 0.6,
      }); // Item Two //
      setItemThreeSettings({
        x: "70%",
        yTop: "330%",
        yBottom: "-400%",
        scale: 0.6,
      }); // Item Three //
      setItemFourSettings({
        x: "2%",
        yTop: "380%",
        yBottom: "-430%",
        img: "https://i.postimg.cc/P5cSqfmr/mobile5.png",
        scale: 0.6,
      }); // Item Four //
    }
    if (size.width < 630) {
      setItemOneSettings({
        x: "50%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/2SdsbZS8/mobile2.png",
        scale: 0.6,
      }); // Item One //
      setItemTwoSettings({
        x: "2%",
        yTop: "220%",
        yBottom: "-410%",
        scale: 0.6,
      }); // Item Two //
      setItemThreeSettings({
        x: "50%",
        yTop: "320%",
        yBottom: "-460%",
        scale: 0.6,
      }); // Item Three //
      setItemFourSettings({
        x: "2%",
        yTop: "350%",
        yBottom: "-450%",
        img: "https://i.postimg.cc/P5cSqfmr/mobile5.png",
        scale: 0.6,
      }); // Item Four //
    }
    if (size.width < 420) {
      setItemOneSettings({
        x: "20%",
        yTop: "170%",
        yBottom: "-360%",
        img: "https://i.postimg.cc/2SdsbZS8/mobile2.png",
        scale: 0.6,
      }); // Item One //
      setItemTwoSettings({
        x: "-8%",
        yTop: "220%",
        yBottom: "-410%",
        scale: 0.6,
      }); // Item Two //
      setItemThreeSettings({
        x: "20%",
        yTop: "320%",
        yBottom: "-460%",
        scale: 0.6,
      }); // Item Three //
      setItemFourSettings({
        x: "-8%",
        yTop: "350%",
        yBottom: "-450%",
        img: "https://i.postimg.cc/P5cSqfmr/mobile5.png",
        scale: 0.6,
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
      src: "https://i.postimg.cc/XXSPXjMC/mobile3.png",
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
      src: "https://i.postimg.cc/nzwbVfc4/mobile1.png",
      y: yThree,
      x: xThree,
      scale: itemThreeSettings.scale,
    }, // Item Three //
  ];

  return { projectOnePhotos: projectOnePhotos };
};

export default ProjectOne;
