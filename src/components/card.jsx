import React from 'react'
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

function Card() {
  return (
    <div className='flex flex-wrap '>
        <div className='w-full md:w-4/12'>
            <div className='bg-white px-[60px] mx-5 mb-7 md:mb-0 py-[60px] rounded-2xl'>
                <p className='text-[#00BAC7] text-[16px] font-bold '>Buku Digital</p>
                <h3 className='text-[32px] py-5 font-semibold'>Rp100.000</h3>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Buku lengkap</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Akses secara digital</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsFillXCircleFill className='text-[#F52E52] text-[20px]'/>
                <p>Buku fisik</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Mendapat pembaruan</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Konsultasi</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Dapat diunduh</p>
                </div>

                <p className='bg-[#00BAC7] text-white text-center py-[15px] mt-7 rounded-xl'>Beli Sekarang</p>

            </div>
        </div>
        <div className='w-full md:w-4/12'>
        <div className='bg-white px-[60px] py-[60px] mx-5 mb-7 md:mb-0 rounded-2xl'>
                <p className='text-[#00BAC7] text-[16px] font-bold '>Buku Fisik</p>
                <h3 className='text-[32px] py-5 font-semibold'>Rp185.000</h3>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Buku lengkap</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsFillXCircleFill className='text-[#F52E52] text-[20px]'/>
                <p>Akses secara digital</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Buku fisik</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsFillXCircleFill className='text-[#F52E52] text-[20px]'/>
                <p>Mendapat pembaruan</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Konsultasi</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Dapat diunduh</p>
                </div>

                <p className='bg-[#00BAC7] text-white text-center py-[15px] mt-7 rounded-xl'>Beli Sekarang</p>

            </div>
        </div>
        <div className='w-full md:w-4/12'>
        <div className='bg-white px-[60px] py-[60px] mx-5 mb-7 md:mb-0 rounded-2xl'>
                <p className='text-[#00BAC7] text-[16px]  font-bold '>Buku Digital + Fisik</p>
                <h3 className='text-[32px] py-5 font-semibold'>Rp250.000</h3>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Buku lengkap</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Akses secara digital</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Buku fisik</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Mendapat pembaruan</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Konsultasi</p>
                </div>
                <div className=' flex space-x-2 py-2 items-center'>
                <BsCheckCircleFill className='text-[#20D27D] text-[20px]'/>
                <p>Dapat diunduh</p>
                </div>

                <p className='bg-[#00BAC7] text-white text-center py-[15px] mt-7 rounded-xl'>Beli Sekarang</p>

            </div>
        </div>

    </div>
  )
}

export default Card