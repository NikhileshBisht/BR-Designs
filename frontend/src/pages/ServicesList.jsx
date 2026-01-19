import React from "react";
import { useNavigate } from "react-router-dom";
import servicesImg from "../asserts/services-overview.png";
import "./ServicesList.css";

const services = [
    "Civil & Interior Finishes",
    "Modular Furniture Solutions",
    "Smart MEP Services",
    "Plumbing",
    "Sprinkler Systems",
    "IT & Networking",
];

export default function ServicesList() {
    const navigate = useNavigate();

    return (
        <section className="services-section">
            <div className="services-container">
                {/* Left Side: Text and List */}
                <div className="services-left">
                    <h2 className="services-title">Services We Provide<span></span></h2>

                    <ul className="services-list">
                        {services.map((service, index) => (
                            <li key={index}>
                                <span className="bullet"></span>
                                {service}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="all-services-btn"
                        onClick={() => navigate('/services')}
                    >
                        All Services →
                    </button>
                </div>

                {/* Right Side: Image */}
                <div className="services-right">
                    <div className="services-image-wrapper">
                        <img src={servicesImg} alt="Our Services" />
                    </div>
                </div>
            </div>
        </section>
    );
}
