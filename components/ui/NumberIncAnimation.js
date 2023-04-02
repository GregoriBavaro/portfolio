import { animated, useSpring } from '@react-spring/web'

const NumberIncAnimation = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 5000,
    config: { mass: 1, tension: 20, friction: 5 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default NumberIncAnimation;
