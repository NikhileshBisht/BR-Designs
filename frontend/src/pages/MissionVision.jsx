import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaBullseye, 
  FaEye, 
  FaCheckCircle, 
  FaTrophy, 
  FaUsers, 
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";
import './MissionVision.css';

export default function MissionVision() {
  const navigate = useNavigate();
  return (
    <section className="mv-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        OUR MISSION & VISION
      </motion.h2>

      <p className="mv-subtitle">
        Driving excellence through purpose and vision, shaping the future
        together
      </p>

      <div className="mv-cards">
        {/* MISSION */}
        <motion.div
          className="mv-card"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mv-icon blue">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>
          <p>
            Our mission is to understand client expectations and fulfill them
            by delivering smooth project execution within defined timelines.
            We build strong professional relationships through sincerity and
            transparency.
          </p>

          <div className="mv-features">
            <span><FaCheckCircle /> Timely Delivery</span>
            <span><FaCheckCircle /> Quality Focus</span>
            <span><FaCheckCircle /> Client Partnership</span>
            <span><FaCheckCircle /> Transparency</span>
          </div>
        </motion.div>

        {/* VISION */}
        <motion.div
          className="mv-card"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mv-icon green">
            <FaEye />
          </div>

          <h3>Our Vision</h3>
          <p>
            We envision becoming an affordable solution provider by delivering
            outstanding services that create inspiring environments and
            sustained growth for our clients and partners.
          </p>

          <div className="mv-features">
            <span><FaLightbulb /> Innovation</span>
            <span><FaUsers /> Partnership</span>
            <span><FaChartLine /> Growth</span>
            <span><FaTrophy /> Excellence</span>
          </div>
        </motion.div>
      </div>

      <div className="mv-cta">
        <p>Ready to bring your vision to life with us?</p>

        <button 
          className="gradient-btn"
          onClick={() => navigate('/contact')}
        >
          Get Started Today →
        </button>
      </div>
    </section>
  );
}
