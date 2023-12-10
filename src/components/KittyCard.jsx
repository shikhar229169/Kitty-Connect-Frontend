import React from "react";
import useContractAddr from "../context/contractAddr";
import KittyConnect from "../abi/KittyConnect";
import { ethers } from "ethers";
import './KittyCard.css'

function KittyCard(props) {

    return (
        <div className="kitty-card">
        <div className="card-container" style={{margin: "10px"}}>
            <img className="round" height="180px" width="180px" src={`https://ipfs.io/ipfs/${props.imageIpfsHash.substr(7)}`} alt="user" />
            <h3>Name: {props.catName}</h3>
            <h6>Breed: {props.catBreed}</h6>
            <p> A cute kitty <br /> playfull and cherfull</p>
            <div className="buttons">
                <button className="primary">
                    tokenId
                </button>
                <button className="primary ghost">
                    {props.tokenId}
                </button>
            </div>
            <div className="info">
                <h6>Info</h6>
                <ul>
                    <li>ShopPartner: {props.shopPartner}</li>
                    <li>dob: {new Date(props.dob * 1000).toDateString()}</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default KittyCard