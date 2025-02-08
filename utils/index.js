import {ethers} from "ethers";
import MetaLink from "./MetaLink.json";


// ✅ Connects to MetaMask.
// ✅ Gets the user’s wallet.
// ✅ Loads the deployed smart contract using its ABI and address.
// ✅ Returns an object that allows interacting with the contract.
export const contract=async()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum}=window;
 if(ethereum)
 {
    const signer=provider.getSigner();
    const contractReader=new ethers.Contract("0xb965121E106167DAa47B4a1CE40dc59882905f59",
        MetaLink.abi,
        signer
    );

    return contractReader;
 }
}
