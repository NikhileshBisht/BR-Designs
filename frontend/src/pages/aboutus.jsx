import { motion } from "framer-motion";
import aboutImg from "../asserts/about-br.jpg"; // your image
import './about.css';
import OurJourney from './ourJourney';
import OurValues from "./ourValue";
import MissionVision from './MissionVision';
import OurEthics from './OurEthics';
import NationwideFootprint from './NationwideFootprint';
import WhyUs from './WhyUs';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

export default function AboutUs() {
  return (
    <>
      <section className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <span className="diamond">◆</span> About Us
          </motion.h2>

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <strong>BR CREATIVE DESIGNS</strong> is a trusted name in the interior
            contracting industry, with decades of experience passed down through
            generations. We are committed to delivering{" "}
            <b>exceptional craftsmanship</b> and{" "}
            <b>world-class fabrication</b>.
          </motion.p>

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            From start to finish, we provide comprehensive turnkey solutions
            tailored to each space, ensuring <b>smooth and efficient execution</b>.
          </motion.p>

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            Our focus on <b>quality materials</b>, <b>cost efficiency</b>, and{" "}
            <b>timely delivery</b> has helped us grow through trust and word-of-mouth.
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="About Us" />
        </motion.div>
      </section>
      
      {/* Our Journey Section */}
      <OurJourney />
      <OurValues/>
      <MissionVision />
      <OurEthics />
      <NationwideFootprint />
      <WhyUs />
    </>
  );
}
