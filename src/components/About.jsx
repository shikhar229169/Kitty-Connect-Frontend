import React from "react";
import './About.css'
import basketCat from './assets/basket-cat.jpg'
import cat from './assets/cat.jpg'
import ccip from './assets/ccip.svg'

function About() {
    return (
        <div>

            <div className="about">
                <div className="about-left">
                    <div>
                        <h1>
                            Kitty Connect
                        </h1>
                    </div>
                    <div>
                        <p>We at kitty connect provides you a transparent and easy way to buy cats from our shop partners and get a cute kitty NFT along with your cat, which will track all the information of your cat, the vet visit remarks, owner info, breed of cat, image of cat.</p>
                        <p>We provide the easiest, transparent and secure way to bridge your NFT from one chain to other chain of your choice within fractions powered by chainlink ccip, so that you can have the exact same service on the other chain with no difference.</p>
                        <p>Also, we cover other issue whenever user wants to give their cat to new owner, then can transfer the ownership in just a single click and transferring ownership required the confirmation of our shop partner.</p>
                    </div>
                </div>
                <div className="about-right">
                    <img src={basketCat} alt="" />
                </div>
            </div>


            <div className="about-p">

            <div className="about-p-e">
                <img src={cat} alt="" />
                <div>
                    <h1>Easy to Use</h1>
                    <p>
                        Want to bridge NFT or transfer the ownership of your cat to a new owner, worry not. With our platform, you can bridge your NFT to the desired chain in a single click just enter the token id you want to bridge and rest is on us, with chainlink ccip your NFT will be bridged to other chain in fraction of time in a transparent and secure manner.
                    </p>
                    <p>
                        With just a single click you can transfer the ownership of your cat to other owner, it is as simple as transferring the NFT to the new owner and to retain security, transfer required the confirmation of our shop partner in order to transfer the NFT, thus transferring the ownership to new owner.
                    </p>
                </div>
            </div>

            <div className="about-p-e">
                <div>
                    <h1>NFT Bridging powered by chainlink CCIP</h1>
                    <p>At KittyConnect, we use chainlink's cross chain interoperability protocol to securely transfer your kitty NFT from source chain to your desired destination chain in just a single click. It first burns the NFT on the source chain and transfer all the NFT related data in encoded form on the destination chain via chainlink ccip and mints the same NFT on destination chain thus preserving it's uniqueness.</p>
                </div>
                <img src={ccip} alt="" />
            </div>

            <div className="about-p-e">
                <img src="" alt="" />
                <div></div>
            </div>

            </div>            

        </div>
    )
}

export default About