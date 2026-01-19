import React from "react";
import "./CallToAction.css";

export default function CallToAction() {
    return (
        <section className="cta-section">
            <h2 className="cta-title">Call To Action</h2>

            <p className="cta-text">
                Love what you see? Let's bring your vision to life. From concept to
                completion, we're here to design spaces that inspire. Reach out to
                start your transformation today. Book your free consultation now.
            </p>

            <a href="tel:01149149665" className="cta-button">
                Call To Action
            </a>
        </section>
    );
}
