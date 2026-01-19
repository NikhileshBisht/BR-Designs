import "./Expertise.css";
import {
    FaTools,
    FaWrench,
    FaBolt,
    FaNetworkWired,
    FaPalette,
    FaCouch,
} from "react-icons/fa";

const expertiseData = [
    {
        icon: <FaTools />,
        title: "Design & Build Fit-Out",
        desc: "Civil and interior design & build execution for various spaces.",
    },
    {
        icon: <FaWrench />,
        title: "MEP Packages",
        desc: "Design & execution of Mechanical, Electrical, and Plumbing systems.",
    },
    {
        icon: <FaBolt />,
        title: "LV Packages",
        desc: "Low-voltage system design and execution for optimal infrastructure.",
    },
    {
        icon: <FaNetworkWired />,
        title: "AV & IT Passive Packages",
        desc: "Structured cabling and system integration for AV & IT solutions.",
    },
    {
        icon: <FaPalette />,
        title: "Graphics & Signage",
        desc: "Creative branding, signage, and visual installations.",
    },
    {
        icon: <FaCouch />,
        title: "Furniture & Accessories",
        desc: "Supply of premium furniture, lighting, and decorative accessories.",
    },
];

function Expertise() {
    return (
        <section className="expertise-section">
            <h2>Area of Expertise</h2>

            <div className="expertise-grid">
                {expertiseData.map((item, index) => (
                    <div className="expertise-card" key={index}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Expertise;
