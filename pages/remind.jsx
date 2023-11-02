import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const remind = () => {
  return (
    <div className='w-full mx-auto min-h-screen sm:h-full bg-black'>
      <div className='max-w-[1240px] mx-auto p-4'>
       <div className=' justify-center items-center p-20'>
        <div className='flex justify-center text-2xl font-bold text-[#e35555] '>
          Rules are rules!
        </div>
       
        <div className='text-[#FFFFFF] flex justify-center font-bold text-2xl ml-4 sm:text-4xl px-4'>You don&apos;t have NFT! to access the premium content, you fool! .</div>
        
        <div className='text-[#FFFFFF] flex justify-center'><Link href='https://nftseeker-dapp.vercel.app/' target='_blank' className='btngrad ' >Get NFT Over there!</Link></div>
        <div className='text-[#FFFFFF] flex justify-center'><Link href='/login' className='btngrad ' >Return to login page</Link></div>
      </div>
        
      </div>
     
    </div>
  )
}

export default remind