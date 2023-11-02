import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Blockchain from "../components/Blockchain";
import Footer from "../components/Footer";


// replace this with your contract address
const contractAddress = "0x0cbd40624E87FC63382b6F3aD4fB72ED03B50db9";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Blockchain />
      <Footer />
    </div>
  );
}
