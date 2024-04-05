import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

function Section9() {
  return (
    <div className='max-w-6xl mx-auto py-24 px-5'>
         <div className='flex justify-center '>
            <p className='text-center py-2 rounded-full bg-[#00BAC7] bg-opacity-5 w-[126px] text-[#00BAC7]'>HARGA BUKU</p>
            </div>
            <h3 className='text-xl lg:text-4xl pb-3 font-semibold text-center'>Anda ingin segera memesan buku ini?</h3>
            <p className='text-gray-500 text-sm lg:text-xl text-center'>Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja. </p>
            <div className='flex flex-wrap gap-12 justify-center   py-12'>
                <button className=" flex gap-5 pb-3 ">
                    <AiOutlineDownload className='text-3xl font-semibold '/>
                    <div>
                        <h3 className='text-sm font-semibold'>SUDAH TERJUAL</h3>
                        <h3 className='text-[24px] font-semibold'>501,234+</h3>
                    </div>
                </button>
                <button className="px-7 py-5 flex gap-2 bg-[#00BAC7] rounded-full items-center justify-center">
                    <h3 className='text-white'>BELI SEKARANG</h3>
                   <BsArrowRightCircle className='text-white text-2xl '/>
                </button>
                

            </div>
    </div>
  )
}

export default Section9