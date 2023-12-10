import React, {useState} from "react";
import useContractAddr from "../../context/contractAddr";
import KittyConnect from "../../abi/KittyConnect";
import { ethers } from "ethers";

function ConnectOwner() {
    const { kittyConnectAddr } = useContractAddr()
    const [shopAddr, setShopAddr] = useState()

    async function addShop() {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const contract = new ethers.Contract(kittyConnectAddr, KittyConnect.abi, signer)

        const txn = await contract.addShop(shopAddr)
        await txn.wait(1)
    }

    return (
        <div className="User">
            <div className="heading">
                <h1>Welcome to KittyConnect</h1>
                <p>Hey, yo kitty connect owner, want to add a new partner shop, worry not, it's just only a click away. Meowdy!</p>
            </div>

            <div className="user-forms">

                <div className="user-form">

                    <div>
                        <div className="user-form-heading">
                            <h3>Add Shop</h3>
                        </div>
                        <div className="userInputs">
                            <div className="userInput">
                                <label htmlFor="shopAddr">Shop ETH Address</label>
                                <input value={shopAddr} onChange={(e) => setShopAddr(e.target.value)} id="shopAddr" placeholder="Enter shop eth address" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="user-button">
                        <button onClick={addShop}>Add Shop</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ConnectOwner