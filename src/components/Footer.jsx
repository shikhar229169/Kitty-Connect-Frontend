import React from "react";
import './Footer.css'

function Footer() {
    return (
        <footer id="footer">
            <div id="features">
                <div className="feature-content">
                    <h3>Get to Know Us</h3>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Press Releases</span>
                    <span>Cat Science</span>
                </div>
                <div className="feature-content">
                    <h3>Connect with Us</h3>
                    <span>Kittybook</span>
                    <span>Kwitter</span>
                    <span>Katgram</span>
                </div>
                <div className="feature-content">
                    <h3>Cat Help</h3>
                    <span>Buy a Cat</span>
                    <span>Bridge Cat NFT</span>
                    <span>Transfer Cat</span>
                    <span>Meow Meow</span>
                </div>
                <div className="feature-content">
                    <h3>Let Us Help You</h3>
                    <span>Your Account</span>
                    <span>Cancel Guidelines</span>
                    <span>App Download</span>
                    <span>Help</span>
                </div>
            </div>
            <div id="rights">
                &copy; All rights reserved by kitties
            </div>
        </footer>
    )
}

export default Footer