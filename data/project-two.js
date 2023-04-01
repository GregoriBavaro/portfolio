//Hooks
import { useScroll, useTransform } from "framer-motion";
import useWindowSize from "../components/hooks/use-windowDimensions";
import { useEffect, useState } from "react";


//Photos
// import desktopOne from "/images/projectTwo/desktop1.png";
// import desktopTwo from "/images/projectTwo/desktop2.png";
// import mobileTwo from "/images/projectTwo/mobile2.png";
// import mobile from "/images/projectTwo/mobile.png";
// import mobileThree from "/images/projectTwo/mobile3.png";
// import mobileFour from "/images/projectTwo/mobile4.png";



const ProjectTwo = () => {
  const { scrollYProgress } = useScroll();
  const size = useWindowSize();

  const [itemOneSettings, setItemOneSettings] = useState({
    x: "5%",
    img: "https://i.postimg.cc/SsP7Ng02/desktop2.png",
    scale: 1.2,
    yTop: "290%",
    yBottom: "-200%",
  }); // Item One //

  const [itemTwoSettings, setItemTwoSettings] = useState({
    x: "35%",
    scale: 0.7,
    yTop: "400%",
    yBottom: "-220%",
  }); // Item Two //

  const [itemThreeSettings, setItemThreeSettings] = useState({
    x: "13%",
    scale: 1.2,
    img: "https://i.postimg.cc/NFVNSgGn/desktop1.png",
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
    if (size.width < 1520) {
      setItemOneSettings({
        x: "30%",
        img: "https://i.postimg.cc/g0WG1pnr/mobile3.png",
        scale: 0.9,
        yTop: "290%",
        yBottom: "-200%",
      }); // Item One //

      setItemTwoSettings({
        x: "5%",
        scale: 0.8,
        yTop: "400%",
        yBottom: "-220%",
      }); // Item Two //

      setItemThreeSettings({
        x: "27%",
        scale: 0.9,
        img: "https://i.postimg.cc/26HmqBTB/mobile4.png",
        yTop: "780%",
        yBottom: "-290%",
      }); // Item Three //

      setItemFourSettings({
        x: "4%",
        scale: 0.9,
        yTop: "880%",
        yBottom: "-250%",
      }); // Item Four //
    } else {
      setItemOneSettings({
        x: "5%",
        img: "https://i.postimg.cc/SsP7Ng02/desktop2.png",
        scale: 1.2,
        yTop: "290%",
        yBottom: "-200%",
      }); // Item One //

      setItemTwoSettings({
        x: "35%",
        scale: 0.7,
        yTop: "400%",
        yBottom: "-220%",
      }); // Item Two //

      setItemThreeSettings({
        x: "13%",
        scale: 1.2,
        img: "https://i.postimg.cc/NFVNSgGn/desktop1.png",
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
    if (size.width < 1120) {
      setItemOneSettings({
        x: "20%",
        img: "https://i.postimg.cc/g0WG1pnr/mobile3.png",
        scale: 0.9,
        yTop: "290%",
        yBottom: "-200%",
      }); // Item One //

      setItemTwoSettings({
        x: "2%",
        scale: 0.8,
        yTop: "400%",
        yBottom: "-220%",
      }); // Item Two //

      setItemThreeSettings({
        x: "17%",
        scale: 0.9,
        img: "https://i.postimg.cc/26HmqBTB/mobile4.png",
        yTop: "780%",
        yBottom: "-290%",
      }); // Item Three //

      setItemFourSettings({
        x: "2%",
        scale: 0.9,
        yTop: "880%",
        yBottom: "-250%",
      }); // Item Four //
    }
    if (size.width < 525) {
      setItemOneSettings({
        x: "20%",
        img: "https://i.postimg.cc/g0WG1pnr/mobile3.png",
        scale: 0.6,
        yTop: "290%",
        yBottom: "-200%",
      }); // Item One //

      setItemTwoSettings({
        x: "2%",
        scale: 0.6,
        yTop: "450%",
        yBottom: "-240%",
      }); // Item Two //

      setItemThreeSettings({
        x: "17%",
        scale: 0.6,
        img: "https://i.postimg.cc/26HmqBTB/mobile4.png",
        yTop: "640%",
        yBottom: "-290%",
      }); // Item Three //

      setItemFourSettings({
        x: "2%",
        scale: 0.6,
        yTop: "750%",
        yBottom: "-250%",
      }); // Item Four //
    }
  }, [size.width]);

  const y = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemOneSettings.yTop, itemOneSettings.yBottom]
  );
  const yTwo = useTransform(
    scrollYProgress,
    [0.1, 1],
    [itemTwoSettings.yTop, itemTwoSettings.yBottom]
  );
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
      src: "https://i.postimg.cc/qMyYS3nX/mobile.png",
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
      src: "https://i.postimg.cc/RFvVJmB2/mobile2.png",
      y: ySix,
      x: xSix,
      scale: itemFourSettings.scale,
    }, // Item Four //
  ];

  return { projectTwoPhotos: projectTwoPhotos };
};

export default ProjectTwo;
