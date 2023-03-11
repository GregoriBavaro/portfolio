//Hooks
import { motion as m, AnimatePresence } from "framer-motion";
import { Fragment } from "react";

//Components
import Navigation from "../components/layout/Navigation";
import Hero from "../components/ui/Hero";

const HomePage = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
    </Fragment>
  );
};

export default HomePage;
