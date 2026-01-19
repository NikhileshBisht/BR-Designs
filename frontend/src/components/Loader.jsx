import React from 'react';
import './Loader.css';
import logo from '../asserts/logo2.cdr.png';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <img src={logo} alt="BR Logo" className="loader-logo" />
                <div className="loader-spinner"></div>
            </div>
        </div>
    );
};

export default Loader;
