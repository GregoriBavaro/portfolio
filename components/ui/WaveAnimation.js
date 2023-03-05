//Hooks
import {motion as m} from "framer-motion"

const WaveAnimation = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 6, bounce: 0 },
              opacity: { delay, duration: 0.01 },
            },
          };
        },
      };

    return (
        <m.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsxlink="http://www.w3.org/1999/xlink"
        xmlnssvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 1422 800"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="oooscillate-grad"
          >
            <stop
              stopColor="rgb(172, 136, 97)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(45, 112, 100)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g
          strokeWidth="2"
          stroke="url(#oooscillate-grad)"
          fill="none"
          strokeLinecap="round"
        >
          <m.path
            d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572"
            opacity="0.05"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550"
            opacity="0.09"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528"
            opacity="0.13"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506"
            opacity="0.16"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484"
            opacity="0.20"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462"
            opacity="0.24"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440"
            opacity="0.28"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418"
            opacity="0.32"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396"
            opacity="0.35"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374"
            opacity="0.39"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352"
            opacity="0.43"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330"
            opacity="0.47"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308"
            opacity="0.51"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286"
            opacity="0.54"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264"
            opacity="0.58"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242"
            opacity="0.62"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220"
            opacity="0.66"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198"
            opacity="0.70"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176"
            opacity="0.73"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154"
            opacity="0.77"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132"
            opacity="0.81"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110"
            opacity="0.85"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88"
            opacity="0.89"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66"
            opacity="0.92"
            variants={draw}
          ></m.path>
          <m.path
            d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44"
            opacity="0.96"
            variants={draw}
          ></m.path>
        </g>
      </m.svg>
    )
}

export default WaveAnimation;