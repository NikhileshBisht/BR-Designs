import "./ProjectManagement.css";
import {
    FaFileAlt,
    FaCalculator,
    FaUsers,
    FaDraftingCompass,
    FaSearch,
    FaProjectDiagram,
} from "react-icons/fa";

const data = [
    {
        icon: <FaFileAlt />,
        title: "Detailed Project Report",
        desc: "Structured planning for successful execution.",
    },
    {
        icon: <FaCalculator />,
        title: "Rough Estimates",
        desc: "Cost projections and early budgeting for transparency.",
    },
    {
        icon: <FaUsers />,
        title: "Coordination",
        desc: "Bridging gaps between stakeholders and teams.",
    },
    {
        icon: <FaDraftingCompass />,
        title: "Tender & Drawings",
        desc: "Precise documentation and technical drafting.",
    },
    {
        icon: <FaSearch />,
        title: "Inspection",
        desc: "Quality assurance through supervision and review.",
    },
    {
        icon: <FaProjectDiagram />,
        title: "Project Execution",
        desc: "Efficient implementation and successful completion.",
    },
];

function ProjectManagement() {
    return (
        <section className="pm-section">
            <h2>Project Management</h2>

            <p className="pm-subtitle">
                We focus on <strong>Process Oriented Project Management</strong> with
                tracking Cost & Effort with Risk Management keeping optimum levels of
                Quality and timeliness for Project Deliveries.
            </p>

            <div className="pm-grid">
                {data.map((item, index) => (
                    <div className="pm-card" key={index}>
                        <div className="pm-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectManagement;
