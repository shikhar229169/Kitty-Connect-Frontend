import React from "react";
import './Navbar.css'
import useContractAddr from "../../context/contractAddr";

function Navbar(props) {
    const { userAddress, kittyConnectAddr, chainId } = useContractAddr()

    return (
        <header>
            <nav>
                <ul id="navList">
                    <li className="navOpt"><a href="">Home</a></li>
                    <li className="navOpt"><a href="#services-section">About Us</a></li>
                    <li className="navOpt"><a href="#footer">Our Shop</a></li>
                    <li className="navOpt"><a href="#contact-section">Contact Us</a></li>
                    <li id="connect" className="navOpt"><button onClick={props.connect}>{(kittyConnectAddr == null) ? "Connect Wallet":"Connected"}</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar