
import Image from "next/image";
import nftImage from "../assets/transparent.png";
import Link from "next/link";


export default function Hero() {
  return (
    <div className=" p-4">
      <div className="max-w-[1340px] mx-auto justify-between ">
        <div className="grid grid-cols-1 md:grid-cols-12  md:mt-20 justify-between">
          <div className="mr-auto md:col-span-5 my-12 items-center">
            <div className="col-span-5 md:col-span-5 flex flex-col justify-between items-start w-full">
              <h1 className="font-poppins font-semibold text-[52px] md:text-[72px] text-black leading-[75px] md:leading-[50.8px]">
                Discover <span className="text-gradient">NFTs</span>
              </h1>
              <h1 className="font-poppins font-semibold text-[52px] md:text-[68px] text-black leading-[75px] md:leading-[100.8px] w-full">
                With Ease!
              </h1>
              <p className="font-poppins font-normal text-[18px] text-dimWhite leading-[30.8px] max-w-[470px] mt-5">
                Unleash the power of NFT Seeker to explore, track, and analyze
                NFTs like never before. Dive into the world of unique digital
                assets and discover the latest trends in the NFT space.
              </p>
              <div className="flex items-center justify-center md:items-start md:justify-start w-full">
                <Link   href="/" class="btn sm:mt-4 my-8 text-white hover:tetx-black">
                  Exclusive Content!!!
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="w-full grid md:col-span-7 justify-end">
            <Image src={nftImage} alt="NFT Image" height={700} width={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
