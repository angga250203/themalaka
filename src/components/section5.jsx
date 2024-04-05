import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
function Section5() {
  return (
    <div className='bg-[#EDFCFD] py-24'>
        <div className='max-w-6xl mx-auto px-5 lg:px-0'>
            <div className='flex justify-center '>
            <p className='text-center py-2 rounded-full bg-[#00BAC7] bg-opacity-5 w-[126px] text-[#00BAC7]'>PRATINJAU</p>
            </div>
            <h3 className='text-center text-[25px] lg:text-[32px] max-w-3xl mx-auto font-semibold'>Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di dalam buku ini</h3>
            <p className='text-center max-w-xl py-5 text-[#272D3E] mx-auto'>Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih detail halaman buku tersebut dan membaca isinya.</p>


            <div className='flex py-32 lg:py-24 mt-40 lg:mt-0'>
               

                <div className='w-full  flex items-center'>
                    <img src="/gambar/book.png" alt="book" className='w-full' />



                    <div className='bg-[#00BAC7] shadow-2xl  flex justify-center items-center  w-[50px] h-[50px] rounded-full absolute lg:left-[850px] -mt-7 '>
                        <AiOutlineArrowRight className='text-[24px] text-white   rounded-full last: '/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5