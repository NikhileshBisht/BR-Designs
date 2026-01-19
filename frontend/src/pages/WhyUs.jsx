import "./WhyUs.css";

export default function WhyUs() {
  const items = [
    "High Quality\nMaterials",
    "On Time\nDelivery",
    "Cost\nEfficiency",
    "Commitment to\nExcellence",
  ];

  return (
    <section className="whyus-section">
      <h2 className="whyus-title">
        <span className="whyus-diamond">◆</span> Why Us?
      </h2>

      <div className="whyus-cradle">
        {/* TOP SUPPORT */}
        <div className="whyus-circle solid support-ball">
          SERVICE<br />ORIENTED
        </div>

        {/* PENDULUMS */}
        <div className="whyus-balls-container">
          {items.map((text, index) => (
            <div key={index} className={`whyus-pendulum pendulum-${index}`}>
              <div className="whyus-string"></div>
              <div className="whyus-circle dotted">
                {text.split("\n").map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
