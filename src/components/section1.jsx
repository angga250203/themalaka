import React from 'react'
import { data1 } from './data'

function Section1() {
  return (
    <div className='max-w-6xl mx-auto mt-40 mb-12 px-5 lg:px-0 '>
        <div className='flex flex-wrap items-center '>
            <div className='w-fulll md:w-5/12'>
                <div className='flex items-center space-x-2'>
                    <span className='w-7 h-1 bg-[#00BAC7]'></span>
                    <p className='text-[#00BAC7]'>BUKU INI UNTUK SIAPA</p>
                </div>
                <h3 className='text-[25px] lg:text-[32px] font-semibold'>Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!</h3>
            </div>
            <div className='w-fulll md:w-6/12 py-2 md:py-0 lg:mx-12'>
                <p className='text-[#272D3E] text-[15px] lg:text-[18px]'>Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!</p>
            </div>
        </div>
        <div className='flex flex-wrap py-24 '>
            {data1.map((dt) =>{
                return(
                    <div className='w-full md:w-4/12 md:px-2 lg:px-5 py-5 md:py-0 ' key={dt.id}>
                <img src={dt.img}/>
                <h3 className='font-semibold text-center text-xl py-2'>{dt.judul}</h3>
                <p className='text-center text-[#272D3E]'>{dt.desc}</p>
            </div>
                )
            })}
            
        </div>

    </div>
  )
}

export default Section1