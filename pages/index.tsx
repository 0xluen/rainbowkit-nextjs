'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import abi from '../functionABI/abi.json'


const Home: NextPage = () => {

  const [data , setData ] :any= useState([])
  const account = useAccount()


  async function exampleRead() {
    const contractAddress = "";
    const provider = new ethers.providers.JsonRpcProvider("https://testnet.rapidrpc.com/")
    const contract = new ethers.Contract(contractAddress, abi, provider);
    contract.getTypes( )
      .then((result: string) => {
        console.log(result)
        setData(result)
      })
      .catch((err: string) => {
        console.error(err);
      });
  }

  const ExampleMint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const contract = new ethers.Contract("x", abi, provider.getSigner());
  
    const nonce = await provider.getTransactionCount(await provider.getSigner().getAddress(), 'latest');
  
    const tx = await contract.safeMint(account.address , 1)
  
    const receipt = await tx.wait();
  
   };
 



  return (
    <>
   <ConnectButton/>
    </>

  );
};

export default Home;
