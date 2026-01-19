import { useState } from "react";
import "./FAQ.css";
import faqImage from "../asserts/faq-consultation.png";

const faqs = [
    {
        question: "Why should I choose you, and what services do you offer?",
        answer: "BHADRIYARAI CREATIVE DESIGNS offers end-to-end solutions from design to build for commercial spaces like corporate offices, retail, hospitality, and institutes. Our dedicated team delivers high-quality interior services across India.",
    },
    {
        question: "What is the process of your work?",
        answer: "We start with a consultation to understand your vision, followed by detailed proposals and costing. Once approved, we handle production, delivery, and installation, keeping you updated at every stage to ensure a seamless experience.",
    },
    {
        question: "How long does it take for a retail interior project?",
        answer: "Project timelines vary based on the scope and complexity of the design. We prioritize quality and precision, providing a customized timeline during the planning phase to meet your business goals effectively.",
    },
    {
        question: "What types of projects do you handle?",
        answer: "We specialize in workspace interiors, retail outlets, and hospitality projects. Our expertise covers everything from small boutique spaces to large-scale corporate environments across India.",
    },
    {
        question: "How do you differentiate each space?",
        answer: "We believe every space is unique. Our designers focus on your specific brand identity and functional needs, ensuring that every project result is a personalized reflection of your aspirations.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-title">
                Frequently Asked Questions <span />
            </h2>

            <div className="faq-container">
                {/* 3D Flip Card Container */}
                <div className="faq-visual">
                    <div className={`faq-card ${activeIndex !== null ? "flipped" : ""}`}>
                        {/* Front Side: Image */}
                        <div className="faq-card-front">
                            <img src={faqImage} alt="FAQ Consultation" />
                            <div className="card-overlay">
                            </div>
                        </div>

                        {/* Back Side: Answer Content */}
                        <div className="faq-card-back">
                            <div className="answer-content">
                                <span className="answer-tag">{activeIndex !== null ? "ANSWER" : ""}</span>
                                {/* <h3>{activeIndex !== null ? faqs[activeIndex].question : ""}</h3> */}
                                <p>{activeIndex !== null ? faqs[activeIndex].answer : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question List */}
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            key={index}
                            onClick={() => handleQuestionClick(index)}
                        >
                            <div className="faq-question">
                                <span>{index + 1}. {faq.question}</span>
                                <span className="arrow">›</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
