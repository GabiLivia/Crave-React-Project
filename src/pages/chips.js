import React from "react";
import { motion } from "framer-motion";

//Components

//Ease
const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionGroup = {
  delay: 0.5,
  x: { duration: 1 },
  default: { ease: "linear" },
};

const Chips = ({ imageDetails }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="container fluid"
    >
      <div className="row ">
        <div className="group">
          <motion.img
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              y: "0%",
              x: "-10%",
              transition: { delay: 1, ...transition },
              scale: 0.8,
            }}
            exit={{ y: "0%", x: "0%", opacity: 0 }}
            src={require("../images/sourcream.png")}
            alt="an image"
            className="image-row right"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 4, ...transitionGroup },
            }}
            exit={{ opacity: 0 }}
          >
            Cool sour cream and herby green onion combo.
          </motion.p>
        </div>
        <div className="group">
          <motion.img
            initial={{
              x: "95%",
              y: "7.3%",
              width: imageDetails.width,
              height: imageDetails.height,
            }}
            animate={{
              x: "0%",
              y: "0%",
              width: "100 %",
              scale: 1.1,
              transition: { delay: 0.2, ...transition },
            }}
            src={require("../images/paprika.png")}
            alt="an image"
            className="image-row center"
          />
          <motion.p
            initial={{ opacity: 0, transition: { transition } }}
            animate={{
              opacity: 1,
              transition: { delay: 4, ...transitionGroup },
            }}
            exit={{ opacity: 0 }}
          >
            Everyone's favourite.
            <br /> Try it yourself!
          </motion.p>
        </div>
        <div className="group">
          <motion.img
            initial={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: 1,
              y: "0%",
              x: "10%",
              transition: { delay: 1, ...transition },
              scale: 0.8,
            }}
            exit={{ y: "0%", x: "0%", opacity: 0 }}
            src={require("../images/cheese.png")}
            alt="an image"
            className="image-row left"
          />
          <motion.p
            initial={{ opacity: 0, transition: { transition } }}
            animate={{
              opacity: 1,
              transition: { delay: 4, ...transitionGroup },
            }}
            exit={{ opacity: 0 }}
          >
            Very CHEEZY!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Chips;
