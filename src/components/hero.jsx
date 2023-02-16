import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

function Hero() {
  return (
    <div className='ske  md:h-[65vh]  lg:h-[120vh]  -mt-24 -z-10 '>
        <div className="max-w-6xl mx-auto flex flex-wrap pt-52 px-5 md:px-7">
        <div className='w-full md:w-1/2 '>
        <h3 className='text-[25px] md:text-[30px] font-bold text-white'>Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS</h3>
        <p className='text-white text-[14px] md:text-[16px] mt-4'>Buku ini akan mengajarkan kamu konsep utility-first pada CSS  dan diakhiri dengan membangun sebuah website yang<br/> responsive dengan Tailwind CSS.</p>

        <div className='flex mt-12 space-x-6'>
            <div className='w-6/12 '>
                <button className='bg-[#00BAC7] flex items-center px-4 py-3 rounded-full '>
                <a className=' text-white rounded-2xl'>Beli sekarang</a>
             
                <BsArrowRightCircle className='text-white mx-2 md:text-2xl'/>
            
                </button>
            </div>


            <div className='w-4/12'>
                <div className='flex '>
                    <AiOutlineDownload className='text-white text-3xl mx-3 '/>
                    <div>
                        <p className="text-gray-300 text-xs ">SUDAH TERJUAL</p>
                        <p className='text-white text-2xl'>501,234+</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='hidden lg:flex mt-12 items-center'>
            <span className='h-1 w-7 bg-white'></span>
            <p className='px-2 text-white'>TEKNOLOGI YANG DIGUNAKAN</p>
        </div>
        <img src="/gambar/herou1.png" className='hidden lg:flex' />

        </div>
        <div className='w-full md:w-1/2 md:-mt-12 flex justify-center items-center'>
            
                <img src='/gambar/hero.png' className='z-40 '/>
            
        </div>
           </div>
    </div>
  )
}

export default Hero