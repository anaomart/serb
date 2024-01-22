import { motion } from "framer-motion";
import styles from "../../style.js";
import card from "../../assets/card.svg";
import dji from "../../assets/dji.svg";
import drone from "../../assets/drone-1.png";
import icon from "../../assets/icon.svg";

import {
  textVariant,
  slideIn,
  fadeIn,
  staggerContainer,
} from "../../utils/motion.jsx";

const Hero = () => {
  return (
    <>
      <section id="home" className={`flex md:flex-row items-start flex-col`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[999] `}
        >
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-row justify-between items-center w-full z-[999]"
          >
            <h2 className="text-6xl pt-16 pb-12 font-bold px-4">
              Fly Every Where <br /> Capture Every Moment
            </h2>
          </motion.div>

          {/* deskripsi */}
          <motion.p
            variants={textVariant(1.1)}
            className={`${styles.paragraph} max-w-[470px]  ss:px-1 z-[999] text-justify text-center mx-5`}
          >
            Experience the thrill of flying with our advanced and reliable
            drones! Our drones are designed to provide an unparalleled aerial
            perspective, capturing stunning photos and videos from above.
            {/* button */}
            <motion.div
              variants={fadeIn("right", "tween", 0.5, 2)}
              className="flex flex-row "
            >
              <button
                class="block bg-white text-black my-5 w-44
              items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                Get Started
              </button>
            </motion.div>
          </motion.p>
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 2)}
            className="pt-16 md:pl-1 pl-11 sm:pl-1 pl-3"
          >
            <img
              src={card}
              alt="card"
              className="cursor-pointer object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`flex-1 ${styles.flexStart} flex-col   xl:px-0 sm:px-16 px-6 z-[999]   `}
        >
          <div className="  flex flex-col justify-between items-center w-full z-[999]">
            <motion.img
              variants={fadeIn("left", "tween", 0.1, 2)}
              src={drone}
              alt="drone"
              className="py-16  fly items-start  "
            />
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 2)}
              src={icon}
              alt="icons"
            />
            <motion.p
              variants={fadeIn("up", "tween", 0.5, 2)}
              className={`${styles.paragraph} max-w-[570px] mt-5 ss:px-1 z-[999] text-justify mx-5 pt-[70px]`}
            >
              The DJI Mavic Air 2 is a cutting-edge drone designed for
              professional and recreational use. With its 48-megapixel camera,
              4K video recording, and 3-axis gimbal, the Mavic Air 2 captures
              stunning aerial footage with exceptional clarity and stability.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
