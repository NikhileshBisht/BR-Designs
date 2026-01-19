import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaLightbulb, 
  FaBuilding, 
  FaEye 
} from "react-icons/fa";
import './OurJourney.css';

const cards = [
  {
    icon: <FaRocket />,
    title: "The Beginning",
    text:
      "Began as a passionate team of five, dedicated to sourcing quality materials and crafting bespoke furniture for commercial interiors.",
  },
  {
    icon: <FaLightbulb />,
    title: "Growing",
    text:
      "In the wake of the pandemic, we swiftly pivoted, collaborating with factories to scale production and meet large-scale projects.",
  },
  {
    icon: <FaBuilding />,
    title: "Taking Control",
    text:
      "Leveraging our growth, we established our own unit, ensuring superior quality, faster delivery, and full control of our vision.",
  },
  {
    icon: <FaEye />,
    title: "The Future",
    text:
      "With enhanced capabilities, we are poised to redefine the industry, embracing innovation and leaving no opportunity unexplored.",
  },
];

export default function OurJourney() {
  return (
    <section className="journey-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <span className="diamond">◆</span> Our Journey
      </motion.h2>

      <div className="journey-cards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="journey-card"
            initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
            whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
              amount: 0.5, // Trigger when 50% of the card is visible (centered)
            }}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
