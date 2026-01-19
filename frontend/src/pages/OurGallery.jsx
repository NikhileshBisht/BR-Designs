import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurGallery.css";

// Import real gallery images
import img1 from "../asserts/galary/accenture.jpeg";
import img2 from "../asserts/galary/Suzuki project4.jpeg";
import img3 from "../asserts/galary/toshiba.jpeg";

const galleryImages = [
    { src: img1, title: "Accenture Office" },
    { src: img2, title: "Suzuki Project" },
    { src: img3, title: "Toshiba Facility" },
];

export default function OurGallery() {
    const navigate = useNavigate();
    const [selectedImg, setSelectedImg] = React.useState(null);

    return (
        <section className={`gallery-section ${selectedImg ? "modal-active" : ""}`}>
            <h2 className="gallery-title">
                Our Gallery <span />
            </h2>

            <div className="gallery-grid">
                {galleryImages.map((item, index) => (
                    <div
                        className="gallery-card"
                        key={index}
                        onClick={() => setSelectedImg(item.src)}
                    >
                        <img src={item.src} alt={item.title} />
                    </div>
                ))}
            </div>

            <button
                className="view-all-btn"
                onClick={() => navigate('/gallery')}
            >
                View Gallery →
            </button>

            {/* Lightbox / Fullscreen Modal */}
            {selectedImg && (
                <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
                    <div className="modal-content">
                        <img src={selectedImg} alt="Fullscreen View" />
                        <span className="close-modal">&times;</span>
                    </div>
                </div>
            )}
        </section>
    );
}
