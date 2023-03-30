const CircleColorsSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 800 800"
      opacity="1"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vvvortex-grad">
          <stop
            stopColor="rgb(45, 112, 100)"
            stopOpacity="1"
            offset="0%"
          ></stop>
          <stop
            stopColor="rgb(215, 189, 184)"
            stopOpacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g stroke="url(#vvvortex-grad)" fill="none" strokeLinecap="round">
        <circle
          r="290"
          cx="400"
          cy="400"
          strokeWidth="6"
          strokeDasharray="49 13"
          strokeDashoffset="25"
          transform="rotate(81, 400, 400)"
          opacity="0.05"
        ></circle>
        <circle
          r="261"
          cx="400"
          cy="400"
          strokeWidth="6"
          strokeDasharray="28 34"
          strokeDashoffset="25"
          transform="rotate(190, 400, 400)"
          opacity="0.16"
        ></circle>
        <circle
          r="232"
          cx="400"
          cy="400"
          strokeWidth="5"
          strokeDasharray="43 14"
          strokeDashoffset="25"
          transform="rotate(144, 400, 400)"
          opacity="0.26"
        ></circle>
        <circle
          r="203"
          cx="400"
          cy="400"
          strokeWidth="5"
          strokeDasharray="19 23"
          strokeDashoffset="25"
          transform="rotate(91, 400, 400)"
          opacity="0.37"
        ></circle>
        <circle
          r="174"
          cx="400"
          cy="400"
          strokeWidth="4"
          strokeDasharray="39 25"
          strokeDashoffset="25"
          transform="rotate(2, 400, 400)"
          opacity="0.47"
        ></circle>
        <circle
          r="145"
          cx="400"
          cy="400"
          strokeWidth="4"
          strokeDasharray="40 51"
          strokeDashoffset="25"
          transform="rotate(286, 400, 400)"
          opacity="0.58"
        ></circle>
        <circle
          r="116"
          cx="400"
          cy="400"
          strokeWidth="3"
          strokeDasharray="50 19"
          strokeDashoffset="25"
          transform="rotate(208, 400, 400)"
          opacity="0.68"
        ></circle>
        <circle
          r="87"
          cx="400"
          cy="400"
          strokeWidth="3"
          strokeDasharray="26 24"
          strokeDashoffset="25"
          transform="rotate(230, 400, 400)"
          opacity="0.79"
        ></circle>
        <circle
          r="58"
          cx="400"
          cy="400"
          strokeWidth="2"
          strokeDasharray="48 24"
          strokeDashoffset="25"
          transform="rotate(207, 400, 400)"
          opacity="0.89"
        ></circle>
        <circle
          r="29"
          cx="400"
          cy="400"
          strokeWidth="2"
          strokeDasharray="17 15"
          strokeDashoffset="25"
          transform="rotate(98, 400, 400)"
          opacity="1.00"
        ></circle>
      </g>
    </svg>
  );
};

export default CircleColorsSvg;
