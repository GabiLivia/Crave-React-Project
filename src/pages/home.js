import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ image, imageDetails }) => (
  <>
    <main>
      <div className="container">
        <div className="col-left">
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ y: "0%", x: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="title"
          >
            <h1>SNACK WITH NO LIMITS</h1>
            <div className="information">
              <p>
                When you're on the go and don't have time to cook, Crave are the
                perfect snack! Always be prepared for the mid day hunger.
              </p>

              <button className="btn">Snack now</button>
            </div>
          </motion.div>
        </div>

        <div className="col-right">
          <div className="image-container">
            <motion.div
              initial={{ scale: 0.2, rotate: 180 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 1, ...transition }}
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to={`/chips`}>
                  <ProgressiveImage
                    src={require("../images/paprika.png")}
                    placeholder={require("../images/compressed-image.png")}
                  >
                    {(src) => (
                      <motion.img
                        whileHover={{ rotate: 0 }}
                        transition={transition}
                        src={src}
                        alt="Crave chips"
                        style={{ rotate: 12 }}
                        exit={{ x: "0", y: "0" }}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
