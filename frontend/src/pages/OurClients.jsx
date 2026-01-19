import React from "react";
import "./OurClients.css";

import kasLogo from "../asserts/clients/KAS.png";
import shapoorjiLogo from "../asserts/clients/Shapoorji-Pallonji.png";
import angloLogo from "../asserts/clients/anglo.png";
import buildmyinfraLogo from "../asserts/clients/bulidmyinfra.png";
import cbreLogo from "../asserts/clients/cbre-group-logo.png";
import client1 from "../asserts/clients/client1.jpeg";
import client2 from "../asserts/clients/client2.jpeg";
import client3 from "../asserts/clients/client3.jpeg";
import fedexLogo from "../asserts/clients/fedex.png";
import homedepotLogo from "../asserts/clients/homedepot.png";
import img38 from "../asserts/clients/img38.jpeg";
import knightFrankLogo from "../asserts/clients/knight-frank.webp";
import toshibaLogo from "../asserts/clients/toshiba-leading-innovation-logo.png";

const clients = [
    { name: "CBRE", logo: cbreLogo },
    { name: "Home Depot", logo: homedepotLogo },
    { name: "KAS", logo: kasLogo },
    { name: "Knight Frank", logo: knightFrankLogo },
    { name: "Shapoorji Pallonji", logo: shapoorjiLogo },
    { name: "Anglo", logo: angloLogo },
    { name: "BuildMyInfra", logo: buildmyinfraLogo },
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2 },
    { name: "Client 3", logo: client3 },
    { name: "FedEx", logo: fedexLogo },
    { name: "Img 38", logo: img38 },
    { name: "Toshiba", logo: toshibaLogo },
];

export default function OurClients() {
    return (
        <section className="clients-section">
            <h2 className="clients-title">
                Our Clients <span />
            </h2>

            <p className="clients-subtitle">
                Our clients are at the heart of everything we do—explore the spaces
                we've created together. Discover the incredible clients we've had the
                privilege to work with and the projects we've brought to life.
            </p>

            <div className="clients-slider">
                <div className="clients-track">
                    {/* Double the clients for seamless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div className="client-card" key={`${client.name}-${i}`}>
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
