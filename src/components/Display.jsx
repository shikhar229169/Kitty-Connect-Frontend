import React from "react";
import useContractAddr from "../context/contractAddr";

function Display() {
    const { userAddress, kittyConnectAddr, chainId } = useContractAddr()
    
    return (
        <>
        <div>
            <div>
                User Address: {userAddress}
            </div>
            <div>
                Kitty Connect: {kittyConnectAddr}
            </div>
            <div>
                Chain Id: {chainId}
            </div>
        </div>
        </>
    )
}

export default Display