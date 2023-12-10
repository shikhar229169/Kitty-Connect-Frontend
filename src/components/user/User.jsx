import React, { useState } from "react";
import useContractAddr from "../../context/contractAddr";
import KittyInfo from "../KittyInfo";
import KittyConnect from "../../abi/KittyConnect";
import './User.css'
import { ethers } from "ethers";

function User() {
    const [tokenId1, setTokenId1] = useState()
    const [tokenId2, setTokenId2] = useState()
    const [chainSelector, setChainSelector] = useState()
    const [newOwnerAddr, setNewOwnerAddr] = useState()
    const { kittyConnectAddr } = useContractAddr()

    const [bridgeMessage, setBridgeMessage] = useState('')

    async function bridgeNFT() {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)
        
        const bridgeAddr = KittyConnect.bridge[chainSelector]
        const txn = await contract.bridgeNftToAnotherChain(chainSelector, bridgeAddr, tokenId1)

        console.log(`View bridge txn: https://ccip.chain.link/tx/${txn.hash}`)

        setBridgeMessage(`https://ccip.chain.link/tx/${txn.hash}`)
    }

    async function transferCat() {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)
        
        const txn = await contract.approve(newOwnerAddr, tokenId2)
        await txn.wait(1)
    }

    return (
        <>

        <div className="User">
            <div className="heading">
                <h1>Welcome to KittyConnect</h1>
                <p>What you want to do with your kitty? Do you want to bridge it to other chain? It's very simple just enter the token id and the destination chain on which you want to bridge</p>
            </div>

            <div className="user-forms">

                <div className="user-form">
                    <div className="user-form-heading">
                        <h3>Bridge NFT to other chain</h3>
                    </div>

                    <div>
                        <div className="userInputs">
                            <div className="userInput">
                                <label htmlFor="tokenid1">Token Id:</label>
                                <input value={tokenId1} onChange={(e) => setTokenId1(e.target.value)} id="tokenid1" placeholder="Enter token id to bridge" type="number" />
                            </div>
                            <div className="userInput">
                                <label htmlFor="chain">Chain Selector:</label>
                                <input value={chainSelector} onChange={(e) => setChainSelector(e.target.value)} id="chain" placeholder="Enter destination chain selector" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="user-button">
                        <button onClick={bridgeNFT}>Bridge NFT</button>
                    </div>
                    <div className="bridgeM">
                        <span className="bridgeMessage">
                            <a href={bridgeMessage} target="_blank">{bridgeMessage != '' ? 'View txn here' : ''}</a>
                        </span>
                    </div>

                </div>



                <div className="user-form">

                    <div>
                        <div className="user-form-heading">
                            <h3>Transfer Cat</h3>
                        </div>
                        <div className="userInputs">
                            <div className="userInput">
                                <label htmlFor="tokenid2">Token Id:</label>
                                <input value={tokenId2} onChange={(e) => setTokenId2(e.target.value)} id="tokenid2" placeholder="Enter token id to bridge" type="number" />
                            </div>
                            <div className="userInput">
                                <label htmlFor="nowner">New Owner Address:</label>
                                <input value={newOwnerAddr} onChange={(e) => setNewOwnerAddr(e.target.value)} id="nowner" placeholder="Enter new owner address" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="user-button">
                        <button onClick={transferCat}>Approve Transfer</button>
                    </div>

                </div>

            </div>
        </div>
        
        <div className="kitties">
            <KittyInfo />
        </div>

        </>
    )
}

export default User