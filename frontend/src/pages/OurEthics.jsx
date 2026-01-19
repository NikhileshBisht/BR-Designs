import { motion } from "framer-motion";
import {
  FaHandshake,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import './OurEthics.css';

const ethics = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    text:
      "We are honest and transparent in all our dealings, ensuring our commitments are always fulfilled.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality",
    text:
      "We strive for excellence in every project, maintaining the highest standards of quality and precision.",
  },
  {
    icon: <FaClock />,
    title: "Timeliness",
    text:
      "We respect deadlines and ensure timely delivery without compromising quality.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    text:
      "We believe in teamwork — within our organization and with our clients — to achieve shared success.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text:
      "We continuously evolve by embracing new ideas and technologies that bring value to our clients.",
  },
];

export default function OurEthics() {
  return (
    <section className="ethics-section">
      {/* DUST TEXT HEADER */}
      <motion.h2
        className="dust-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        OUR ETHICS
      </motion.h2>

      <p className="ethics-sub">
        Our core values guide everything we do — from how we collaborate with
        clients to how we deliver our work.
      </p>

      <div className="ethics-grid">
        {/* First 3 cards */}
        {ethics.slice(0, 3).map((item, i) => (
          <motion.div
            key={i}
            className="ethics-card"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              scale: { duration: 1.2, ease: "easeOut", delay: i * 0.15 },
              opacity: { duration: 1.2, delay: i * 0.15 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true, margin: "-120px" }}
          >
            <div className="ethics-card-content">
              <div className="ethics-icon">{item.icon}</div>
              <h3 className="dust-reveal">{item.title}</h3>
              <p className="dust-reveal delay">{item.text}</p>
            </div>
          </motion.div>
        ))}
        
        {/* Last 2 cards centered */}
        <div className="ethics-row-wrapper">
          {ethics.slice(3, 5).map((item, i) => (
            <motion.div
              key={i + 3}
              className="ethics-card"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                scale: { duration: 1.2, ease: "easeOut", delay: (i + 3) * 0.15 },
                opacity: { duration: 1.2, delay: (i + 3) * 0.15 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              viewport={{ once: true, margin: "-120px" }}
              style={{ width: 'calc(33.333% - 15px)', minWidth: '280px' }}
            >
              <div className="ethics-card-content">
                <div className="ethics-icon">{item.icon}</div>
                <h3 className="dust-reveal">{item.title}</h3>
                <p className="dust-reveal delay">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
