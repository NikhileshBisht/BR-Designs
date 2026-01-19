import { useState } from "react";

export default function EnvelopeMessage({
  title,
  name,
  role,
  image,
  message,
  reverse = false
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`envelope-wrapper ${reverse ? "reverse" : ""}`}>
        {/* LEFT CONTENT */}
        <div className="message-area">
          <h2>{title}</h2>

          <div
            className={`envelope ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="envelope-back"></div>

            <div className="letter">
              <p>{message}</p>
            </div>

            <div className="envelope-front"></div>
            <div className="envelope-top"></div>
          </div>

          <span className="hint">{open ? "Click to close" : "Click the envelope to read"}</span>
        </div>

        {/* RIGHT PROFILE */}
        <div className="profile">
          <div className="profile-img-container">
            <img src={image} alt={name} />
          </div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .envelope-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 100px;
          padding: 40px;
          background: #fff;
          max-width: 1200px;
          margin: 0 auto;
        }

        .envelope-wrapper.reverse {
          flex-direction: row-reverse;
        }

        .message-area {
          flex: 1;
          max-width: 520px;
          text-align: left;
          padding-top: 20px; /* Align title with profile image top */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .message-area h2 {
          margin-bottom: 50px;
          font-size: 32px;
          font-weight: 700;
          color: #333;
          position: relative;
        }

        .message-area h2::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 0;
            width: 60px;
            height: 4px;
            background: #ff6a00;
        }

        /* ENVELOPE */
        .envelope {
          position: relative;
          width: 300px;
          height: 190px;
          cursor: pointer;
          perspective: 1000px;
          background: #fdfdfd;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .envelope-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #f5f5f5;
          border-radius: 8px;
          z-index: 1;
        }

        .envelope-front {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #efefef;
          clip-path: polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%);
          z-index: 3;
          border-radius: 8px;
        }

        .envelope-top {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #e5e5e5;
          clip-path: polygon(0 0, 50% 60%, 100% 0);
          transform-origin: top;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 4;
          border-radius: 8px;
        }

        /* LETTER */
        .letter {
          position: absolute;
          width: 500px;
          left: -100px;
          top: 10px; /* Tucked in when closed */
          background: #fff;
          padding: 40px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
          font-size: 15px;
          line-height: 1.7;
          border-radius: 4px;
          border: 1px solid #f0f0f0;
          height: auto;
          color: #444;
          opacity: 0; /* Hidden when closed */
          pointer-events: none;
        }

        .letter p {
            margin: 0;
            white-space: pre-line;
        }

        /* OPEN STATE */
        .envelope.open .envelope-top {
          transform: rotateX(180deg);
          z-index: 1;
        }

        .envelope.open .letter {
          top: -260px; /* Pop out of the top */
          opacity: 1;
          pointer-events: auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          z-index: 5;
        }

        .hint {
          display: block;
          margin-top: 30px;
          font-size: 14px;
          color: #ff6a00;
          font-weight: 600;
          transition: 0.3s;
        }

        /* PROFILE */
        .profile {
          flex: 0 0 300px;
          text-align: center;
        }

        .profile-img-container {
            width: 280px;
            height: 340px;
            margin: 0 auto;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.1);
            background: #f9f9f9;
        }

        .profile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .profile:hover img {
            transform: scale(1.08);
        }

        .profile h3 {
          margin-top: 25px;
          font-size: 24px;
          color: #333;
          margin-bottom: 5px;
        }

        .profile p {
          font-size: 16px;
          color: #ff6a00;
          font-weight: 600;
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .envelope-wrapper, .envelope-wrapper.reverse {
            flex-direction: column;
            gap: 80px;
            text-align: center;
            padding: 80px 5%;
          }
          
          .message-area {
              text-align: center;
              min-height: auto;
          }

          .message-area h2::after {
              left: 50%;
              transform: translateX(-50%);
          }

          .envelope {
              margin: 40px auto;
          }

          .envelope.open .letter {
              top: -220px;
          }
        }
      `}</style>
    </>
  );
}
