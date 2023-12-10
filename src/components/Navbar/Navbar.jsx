import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import useContractAddr from "../../context/contractAddr";

function Navbar(props) {
    const { userAddress, kittyConnectAddr, chainId } = useContractAddr()

    return (
        <header>
            <nav>
                <ul id="navList">
                    <li className="navOpt"><Link to="/">Home</Link></li>
                    <li className="navOpt"><Link to="/about">About Us</Link></li>
                    <li className="navOpt"><Link to="/">Our Shop</Link></li>
                    <li className="navOpt"><Link to="/">Contact Us</Link></li>
                    <li id="connect" className="navOpt"><button onClick={props.connect}>{(kittyConnectAddr == null) ? "Connect Wallet":"Connected"}</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar