import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Check if all fields are filled
    const isFormValid =
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    return (
        <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-info">
                <div className="contact-details-row">
                    <div className="info-item">
                        <span><i className="fa-solid fa-location-dot"></i></span>
                        <div>
                            <h4>Address</h4>
                            <p>
                                BHADRIYARAI CREATIVE DESIGNS PRIVATE LIMITED <br />
                                Ground Floor: FF-3, Building: PVR Anupam <br />
                                New Delhi-110017
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span><i className="fa-solid fa-phone"></i></span>
                        <div>
                            <h4>Call us</h4>
                            <p>
                                +91 7838372001 <br />
                                +91 9599874685 <br />
                                011-49149665
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span><i className="fa-regular fa-envelope"></i></span>
                        <div>
                            <h4>Email us</h4>
                            <p>info@brcreative.co.in</p>
                        </div>
                    </div>
                </div>

                <div className="map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=BHADRIYARAI%20CREATIVE%20DESIGNS%20PRIVATE%20LIMITED%20PVR%20Anupam%20New%20Delhi&output=embed"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-form">
                <h1>Let's talk about your project</h1>

                <form>
                    <div className="row">
                        <div className="input-group">
                            <label>First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                            />
                        </div>

                        <div className="input-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                        />
                    </div>

                    <div className="input-group">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project"
                        />
                    </div>

                    <button type="submit" disabled={!isFormValid}>
                        Let’s talk
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
