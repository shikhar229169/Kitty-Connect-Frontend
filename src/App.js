import './App.css';
import { ethers } from 'ethers';
import kittyConnect from './abi/KittyConnect'
import { ContractAddrProvider } from './context/contractAddr';
import { useState } from 'react';
import KittyInfo from './components/KittyInfo';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import User from './components/user/User';
import Partner from './components/partner/Partner';
import ConnectOwner from './components/ConnectOwner/ConnectOwner';
import About from './components/About';

function App() {
  const [kittyConnectAddr, setKittyConnectAddr] = useState(null)
  const [userAddress, setUserAddress] = useState(null)
  const [chainId, setChainId] = useState(null)
  const [userType, setUserType] = useState(-1)

  async function _setUserType() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const account = await provider.getSigner()

    const chainId = await window.ethereum.request({ method: "eth_chainId" })

    const kittyConnectAddr = kittyConnect.config[chainId].address

    if (kittyConnectAddr) {
      const kittyConnectContract = new ethers.Contract(kittyConnectAddr, kittyConnect.abi, account)
      const kittyConnectOwner = await kittyConnectContract.getKittyConnectOwner()
      const isPartner = await kittyConnectContract.getIsKittyPartnerShop(account.address)

      if (kittyConnectOwner == account.address) {
        console.log(2);
        setUserType(2)
      }
      else if (isPartner) {
        console.log(1);
        setUserType(1)
      }
      else {
        console.log(0);
        setUserType(0)
      }
    }
  }

  window.ethereum.on("accountsChanged", async (accounts) => {
    setUserAddress(accounts[0])
    _setUserType()
  })

  window.ethereum.on("chainChanged", async (chainId) => {
    setChainId(chainId)
    setKittyConnectAddr(kittyConnect.config[chainId].address)
    _setUserType()
  })


  async function connectWallet() {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const account = await provider.getSigner()
        setUserAddress(account.address)

        const chainId = await window.ethereum.request({ method: "eth_chainId" })
        setChainId(chainId)

        const kittyConnectAddr = kittyConnect.config[chainId].address
        setKittyConnectAddr(kittyConnectAddr)
        _setUserType()
      }
    }
    catch (err) {

    }
  }



  return (
    <ContractAddrProvider value={{ kittyConnectAddr, userAddress, chainId }}>
      <Navbar connect={connectWallet} />

      {/* {
        userType == -1 ? <Home /> : <></>
      }
      {
        userType == 0 ? <User /> : <></>
      }
      
      {
        userType == 1 ? <Partner /> : <></>
      }

      {
        userType == 2 ? <ConnectOwner /> : <></>
      } */}

      <About />

      <Footer />
    </ContractAddrProvider>
  );
}

export default App;
