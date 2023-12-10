import { createContext, useContext } from "react";

export const ContractAddrContext = createContext({
    kittyConnectAddr: "",
    userAddress: "",
    chainId: "",
    userType: 0
})

export const ContractAddrProvider = ContractAddrContext.Provider

export default function useContractAddr() {
    return useContext(ContractAddrContext)
}