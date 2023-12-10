// const [catOwner, setCatOwner] = useState('')
//   const [catImageHash, setCatImageHash] = useState('')
//   const [catName, setCatName] = useState('')
//   const [breed, setBreed] = useState('')
//   const [catDob, setCatDob] = useState('')

//   async function submit(e) {
//     e.preventDefault()
//     const provider = new ethers.BrowserProvider(window.ethereum)
//     const account = await provider.getSigner()
//     // const kittyConnectContract = new ethers.Contract(kittyConnect.address, kittyConnect.abi, account)
//     // const tx = await kittyConnectContract.mintCatToNewOwner(catOwner, catImageHash, catName, breed, catDob)
//     // await tx.wait()
    
//   }

//   <div>
//         <form onSubmit={submit}>
//           <input type="text" value={catOwner} onChange={(e) => setCatOwner(e.target.value)}/>
//           <input type="text" value={catImageHash} onChange={(e) => setCatImageHash(e.target.value)}/>
//           <input type="text" value={catName} onChange={(e) => setCatName(e.target.value)}/>
//           <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
//           <input type="text" value={catDob} onChange={(e) => setCatDob(e.target.value)}/>

//           <button type='submit'>Submit</button>
//         </form>
//       </div>