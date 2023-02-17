import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { check } from './data';

function Section3() {
  return (
    <div className='bg-[#EDFCFD] '>
    <div className='max-w-6xl mx-auto py-24 px-5 lg:px-0'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2'>
                <div className='flex items-center space-x-2'>
                    <span className='h-1 w-7 bg-[#00BAC7]'></span>
                    <p className='text-[#00BAC7]'>MANFAAT BUKU</p>
                </div>
                <h3 className='text-[32px] font-bold'>Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini</h3>
                <p className='text-[#272D3E] text-[18px] py-5'>"Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang yang jenius." - J.K Rowling</p>
            {check.map((ck) =>{
                return(
                    <div className='flex items-center space-x-4 py-3 ' key={ck.id}>
                    <BsCheckCircleFill className='text-[#20D27D] text-[30px]'/>
                    <p className='text-[#272D3E] text-[16px]'>{ck.desc}</p>
                     </div>
                )
            })}
               
            </div>
            <div className='w-full md:w-1/2 py-20 lg:py-0'>
                <img src='/gambar/img6.png' className='relative mx-auto z-10 '/>
                <div className='bg-[#00BAC7] relative flex px-3  lg:px-12 z-40 py-4 items-center -mt-32 rounded-2xl lg:mx-5 '>
                    <div className='w-4/12 text-white flex items-center space-x-3 lg:space-x-7'>
                        <div>
                        <h3 className='text-[20px] lg:text-[25px]'>19</h3>
                        <p className='text-[10px] lg:text-[13px]'>Jumlah Chapter</p>
                        </div>
                        <span className='h-16 w-1  bg-[#3EC4CD]'></span>
                    </div>
                    <div className='w-4/12 text-white flex items-center space-x-7'>
                        <div>
                        <h3 className='text-[20px] lg:text-[25px]'>253</h3>
                        <p className='text-[10px] lg:text-[13px]'>Jumlah Halaman</p>
                        </div>
                        <span className='h-16 w-1 bg-[#3EC4CD]'></span>
                    </div>
                    <div className='w-4/12 text-white'>
                        <h3 className='text-[20px] lg:text-[25px]'>60</h3>
                        <p className='text-[10px] lg:text-[13px]'>Hari Menulis</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Section3