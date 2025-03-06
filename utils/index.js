import {ethers} from "ethers";
import MetaLink from "./MetaLink.json";


// ✅ Connects to MetaMask.
// ✅ Gets the user’s wallet.
// ✅ Loads the deployed smart contract using its ABI and address.
// ✅ Returns an object that allows interacting with the contract.
export const contract=async()=>{
    console.log("Are we here ?");
    if (typeof window.ethereum === "undefined") {
        console.log("MetaMask is not installed or enabled in the browser.");
        throw new Error("MetaMask is not installed or enabled in the browser.");
      }
      console.log("MetaMask is  installed  in the browser.")
   
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    console.log("Provider is", provider);
    const {ethereum}=window;
 if(ethereum)
 {
    console.log("Got Ethereum ");
    const signer= await provider.getSigner();
    console.log("Signer" , signer);
    const contractReader=new ethers.Contract("0x861A62f8371bf450d88d3a7b686450dAbB4Bfc2D",
        MetaLink.abi,
        signer
    );

    return contractReader;
 }
}
