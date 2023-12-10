import React from "react";
import './Home.css'
import im from './assets/home-cat.jpg'

function Home() {
    return (
        <div className="home">
            <div className="left">
                <div>
                    <h1>We at <span id="kitty-connect">Kitty Connect</span> provides the best cat services and mint a cute kitty NFT</h1>
                    <p>NFT can be used to track all the info related to cat and it can be bridged easily in very less time</p>
                </div>
                <div className="home-info">
                    <img src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=025" alt="" />
                    <span>NFT Bridging powered by chainlink CCIP</span>
                </div>
            </div>
            <div className="right">
                <img src={im} alt="" />
            </div>
        </div>
    )
}

export default Home