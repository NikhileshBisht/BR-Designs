import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import EnvelopeMessage from "./EnvelopeMessage";
import OurGallery from "./OurGallery";
import ServicesList from "./ServicesList";
import OurClients from "./OurClients";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import "./HomeC.css";

// Team Images
import founderImg from "../asserts/founder.png";
import directorImg from "../asserts/tt1.jpeg";

function Counter({ target, duration = 2 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(spring, (current) => Math.floor(current));

    useEffect(() => {
        if (isInView) {
            spring.set(target);
        }
    }, [isInView, spring, target]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function AboutUs() {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    const fullText = "WELCOME TO BHADRIYARAI CREATIVE DESIGNS PVT. LTD";

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 80);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className="home-about-wrapper">
            {/* TYPEWRITER */}
            <div className="typewriter-container">
                <h1 className="typewriter">{text}</h1>
                <p className="subtitle">WE EVENTUATE YOUR VISION</p>
                <span>Interior design — a technique that creates balance and proportion with a touch of minute detailing to craft impressive spaces. Every space reflects the hope and aspirations of that business, and BR Creative Designs creates spaces that bring out the best impressions, whether modern or traditional. Each interaction brings an excellent experience to cherish at all times.</span>

            </div>
            {/* ABOUT CONTENT */}
            <motion.div
                className="home-about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="team"
                    />
                </div>

                <div className="about-content">
                    <h3 className="small-title">WHO WE ARE</h3>
                    <h2 style={{ color: "black", margin: "0 0 15px 0" }}>Unleashing Potential with Creative Strategy</h2>
                    <p className="desc" style={{ color: "black", margin: "0 0 20px 0" }}>
                        BR Creative Designs was founded in 2021 with a vision to excel in the
                        Real Estate Commercial Interior Sector.
                    </p>

                    <ul style={{ color: "black", listStyle: "none", padding: 0 }}>
                        <li style={{ color: "black", marginBottom: "10px" }}>✔ Enthusiastic team with 5+ years market experience</li>
                        <li style={{ color: "black", marginBottom: "10px" }}>✔ Expertise in Corporate, Retail & Hospitality interiors</li>
                        <li style={{ color: "black", marginBottom: "10px" }}>✔ Complete Turnkey Interior Solutions</li>
                    </ul>

                    <button
                        className="read-btn"
                        onClick={() => navigate('/about')}
                    >
                        Read More →
                    </button>
                </div>
            </motion.div>

            {/* STATS */}
            <div className="stats">
                <div className="stat-box">
                    <h3><Counter target={232} /></h3>
                    <p>Clients</p>
                </div>
                <div className="stat-box">
                    <h3><Counter target={521} /></h3>
                    <p>Projects</p>
                </div>
                <div className="stat-box">
                    <h3><Counter target={1453} /></h3>
                    <p>Hours of Support</p>
                </div>
                <div className="stat-box">
                    <h3><Counter target={32} /></h3>
                    <p>Workers</p>
                </div>
            </div>

            <ServicesList />
            <OurGallery />

            {/* MESSAGES */}
            <div className="messages-section">
                <EnvelopeMessage
                    title="Founder's Message"
                    name="Ashok R. Prajapat"
                    role="Founder & Director"
                    image={founderImg}
                    message={`At BR Creative Designs, we believe every space tells a story. With over two decades of expertise in corporate interior fit-outs, we have built our reputation as a trusted project execution partner for architects, interior designers, corporates, hospitality brands, and real estate developers.

Our focus is simple—seamless execution, timely delivery, and uncompromised quality. By blending design intent with precision workmanship, we transform ideas into inspiring, functional, and future-ready environments.

As a turnkey interior solution provider, we manage everything from concept to final handover, ensuring a seamless and satisfying experience for our clients.

We remain committed to creating spaces that reflect identity, enhance efficiency, and deliver lasting value for our clients.`}
                />

                <EnvelopeMessage
                    title="Director's Message"
                    name="Priyanka Bisht"
                    role="Director"
                    image={directorImg}
                    reverse={true}
                    message={`At BR Creative Designs, we believe that every space is a powerful expression of identity. With over 12 years of expertise in corporate interior fit-outs, we have earned our reputation as a trusted execution partner for leading architects, interior designers, corporates, hospitality brands, and real estate developers.

Our approach is driven by three uncompromising principles—exceptional execution, on-time delivery, and superior quality. By seamlessly translating design intent into precision-crafted realities, we create environments that are refined, functional, and future-ready.

As a turnkey interior solutions provider, we offer end-to-end project ownership—from concept development to flawless final handover—ensuring a seamless, transparent, and elevated client experience at every stage.

We are committed to delivering spaces that embody brand character, enhance operational excellence, and create enduring value. At BR Creative Designs, every project is not merely executed—it is meticulously curated.`}
                />
            </div>
            <OurClients />
            <FAQ />
            <CallToAction />
        </section>
    );
}
