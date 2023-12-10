import React, { useState } from "react";
import useContractAddr from "../context/contractAddr";
import KittyConnect from "../abi/KittyConnect";
import KittyCard from "./KittyCard";
import { ethers } from "ethers";
import './KittyInfo.css'

function KittyInfo() {
    const { kittyConnectAddr, userAddress } = useContractAddr()
    const [cats, setCats] = useState([])

    async function getUserTokens() {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)

        const userKittyTokens = await contract.getCatsTokenIdOwnedBy(userAddress)
        return userKittyTokens
    }

    async function getCatInfo() {
        const tokenIds = await getUserTokens()
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)

        const arr = []
        for (let i in tokenIds) {
            const catInfo = await contract.getCatInfo(tokenIds[i])
            arr.push([catInfo, tokenIds[i].toString()])
        }
        setCats(arr)
    }

    return (
        <>
        <div>
        <button id="getcats" onClick={getCatInfo}>Get Cats</button>
        </div>
        {
            cats.map((i) => { 
                return (
                    <KittyCard catName={i[0].catName} catBreed={i[0].breed} imageIpfsHash={i[0].image} tokenId={i[1]} shopPartner={i[0].shopPartner} dob={Number(i[0].dob)} />
                )
            })
        }
        </>
    )
}

export default KittyInfo