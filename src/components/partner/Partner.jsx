import React, { useState } from "react";
import KittyConnect from "../../abi/KittyConnect";
import useContractAddr from "../../context/contractAddr";
import { ethers } from "ethers";

function Partner() {
  const { kittyConnectAddr } = useContractAddr()

  const [catName, setCatName] = useState('')
  const [catOwner, setCatOwner] = useState('')
  const [catBreed, setCatBreed] = useState('')
  const [catDob, setCatDob] = useState('')
  const [catImage, setCatImage] = useState('')
  const [tokenId, setTokenId] = useState('')
  const [currOwner, setCurrOwner] = useState('')

  async function mintCat() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)

    const txn = await contract.mintCatToNewOwner(catOwner, catImage, catName, catBreed, catDob)
    await txn.wait(1)
  }

  async function facilitateTransfer() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)

    const newOwnerAddr = await contract.getApproved(tokenId)
    const txn = await contract.transferFrom(currOwner, newOwnerAddr, tokenId)
    await txn.wait(1)
  }


  return (
    <div className="User">
      <div className="heading">
        <h1>Welcome to KittyConnect</h1>
        <p>As a shop partner, you can give cat to the customers and issue a NFT that will contain all the information about the cat. If a user wants to tranfer the ownership of their cat to another cat, then it can be done in fraction of seconds and made simple by just transferring the ownership of cat to their new owners</p>
      </div>

      <div className="user-forms">

        <div className="user-form">
          <div className="user-form-heading">
            <h3>Mint Kitty NFT</h3>
          </div>

          <div>
            <div className="userInputs">
              <div className="userInput">
                <label htmlFor="ownAddr">Owner Address:</label>
                <input value={catOwner} onChange={(e) => setCatOwner(e.target.value)} id="ownAddr" placeholder="Enter address of owner" type="text" />
              </div>
              <div className="userInput">
                <label htmlFor="catName">Cat Name:</label>
                <input value={catName} onChange={(e) => setCatName(e.target.value)} id="catName" placeholder="Enter name of cat" type="text" />
              </div>
            </div>
            <div className="userInputs">
              <div className="userInput">
                <label htmlFor="catBreed">Cat Breed:</label>
                <input value={catBreed} onChange={(e) => setCatBreed(e.target.value)} id="catBreed" placeholder="Enter breed of cat" type="text" />
              </div>
              <div className="userInput">
                <label htmlFor="dob">DOB of cat:</label>
                <input value={catDob} onChange={(e) => setCatDob(e.target.value)} id="dob" placeholder="Enter dob of cat" type="number" />
              </div>
            </div>
            <div className="userInputs">
              <div className="userInput">
                <label htmlFor="image">Cat Image Ipfs Hash:</label>
                <input value={catImage} onChange={(e) => setCatImage(e.target.value)} id="image" placeholder="Enter image ipfs hash of cat" type="text" />
              </div>
            </div>
          </div>
          <div className="user-button">
            <button onClick={mintCat}>Mint and Issue Cat</button>
          </div>

        </div>



        <div className="user-form">

          <div>
            <div className="user-form-heading">
              <h3>Facilitate Cat Ownership Transfer</h3>
            </div>
            <div className="userInputs">
              <div className="userInput">
                <label htmlFor="tokenid">Token Id:</label>
                <input value={tokenId} onChange={(e) => setTokenId(e.target.value)} id="tokenid" placeholder="Enter token id of cat" type="number" />
              </div>
              <div className="userInput">
                <label htmlFor="owner">Current Owner Address:</label>
                <input value={currOwner} onChange={(e) => setCurrOwner(e.target.value)}  id="owner" placeholder="Enter curr owner address" type="text" />
              </div>
            </div>
          </div>
          <div className="user-button">
            <button onClick={facilitateTransfer}>Tranfer Ownership of Cat</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Partner