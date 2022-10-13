import ContractAbi from "../artifacts/contracts/OurStream.sol/OurStream.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "<Contract Address>",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}
