import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const projects = [
        { name: 'Zomato', url: 'https://www.zomato.com/' },
        { name: 'ASF ingsna', url: 'https://www.asfinfrastructure.com/sez-asf-insignia.php' },
        { name: 'Woori Bank', url: 'https://www.wooribank.com.kh/careers/' },
        { name: 'Accenture', url: 'https://www.accenture.com/in-en' },
        { name: 'Toshiba', url: 'https://toshiba-india.com/' },
        { name: 'Rockman', url: 'https://www.rockman.in/' },
        { name: 'TataFly', url: 'https://tatafly.com/' },
        { name: 'WTT Project', url: '#' }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <span className="footer-label">Social Links</span>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/people/Ashok-R-Prajapat/100002515233385/?mibextid=wwXIfr&rdid=y8CSHO71nnNieQld&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AUV7UDbR3%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/brcreativedesign1/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/bhadriyarai-creative-designs-private-limited-958a1b33/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <span className="footer-label">Our Projects</span>
                    <div className="footer-projects">
                        {projects.map((project, index) => (
                            <a key={index} href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-section">
                    <span className="footer-label">Our Newsletter</span>
                    <div className="newsletter-text">
                        Subscribe to our newsletter and receive the latest news about our products and services!
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; © Copyright BR Creative Design All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
