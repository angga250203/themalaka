import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

function Section9() {
  return (
    <div className='max-w-6xl mx-auto py-24 px-5'>
         <div className='flex justify-center '>
            <p className='text-center py-2 rounded-full bg-[#00BAC7] bg-opacity-5 w-[126px] text-[#00BAC7]'>HARGA BUKU</p>
            </div>
            <h3 className='text-[32px] font-semibold text-center'>Anda ingin segera memesan buku ini?</h3>
            <p className='text-center max-w-xs mx-auto'>Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja. </p>
            <div className='flex max-w-sm mx-auto py-12'>
                <div className="w-1/2 flex  space-x-7">
                    <AiOutlineDownload className='text-[24px]'/>
                    <div>
                        <h3 className='font-semibold'>SUDAH TERJUAL</h3>
                        <h3 className='text-[24px] font-semibold'>501,234+</h3>
                    </div>
                </div>
                <div className="w-1/2 flex space-x-4 bg-[#00BAC7] rounded-full items-center justify-center">
                    <h3 className='text-white'>BELI SEKARANG</h3>
                    <BsArrowRightCircle className='text-white text-[20px] '/>
                </div>
                

            </div>
    </div>
  )
}

export default Section9