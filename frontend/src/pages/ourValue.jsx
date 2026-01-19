import { motion } from "framer-motion";
import valuesImg from "../asserts/values-br.jpg";
import './OurValues.css';

export default function OurValues() {
  const values = [
    "Customer Centric Approach",
    "Quality Craftsmanship",
    "Innovation & Design Excellence",
    "Transparency",
    "On-Schedule",
  ];

  return (
    <section className="values-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <span className="diamond">◆</span> Our Values
      </motion.h2>

      <div className="values-wrapper">
        {/* LEFT SIDE - Value Pills */}
        <div className="values-list">
          {values.map((item, i) => (
            <motion.div
              key={i}
              className="value-pill"
              style={{ '--index': i }}
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE - Image */}
        <motion.div
          className="values-image-container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={valuesImg} alt="Our Values" className="values-image" />
        </motion.div>
      </div>
    </section>
  );
}
