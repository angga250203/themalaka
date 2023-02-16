import React from 'react'
import { AiOutlineLayout,AiOutlineArrowRight } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

function Section4() {
  return (
      <div className='bg-[#EDFCFD]'>
    <div className='max-w-6xl mx-auto px-5 lg:px-0'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2'>
                <img src='/gambar/img7.png'/>
            </div>
            <div className='w-full md:w-1/2'>
                <div className='flex items-center space-x-2'>
                    <span className='h-1 w-7 bg-[#00BAC7]'></span>
                    <p className='text-[#00BAC7]'>SELAIN ITU</p>
                </div>
                <h3 className='text-[32px] font-bold'>Buku dengan studi kasus nyata, juga komunitas yang ramah</h3>
                <p className='text-[#272D3E] text-[18px] py-5'>Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan.</p>
                <div className='bg-white h-[132px] my-5 px-[30px] py-[20px] rounded-2xl shadow-2xl '>
                    <div className='flex space-x-5  items-center '>
                        <AiOutlineLayout className='text-[#00BAC7] text-[30px]'/>
                        <div>
                            <h3 className='text-[18px] text-[#00BAC7] font-semibold'>Live Demo Project</h3>
                            <p>Lihat live demo project yang akan kamu buat di akhir buku ini.</p>
                        </div>
                        <div className='bg-[#00BAC7]  flex justify-center items-center bg-opacity-5 w-[40px] h-[40px] rounded-full'>
                        <AiOutlineArrowRight className='text-[24px] text-[#00BAC7]   rounded-full '/>
                        </div>
                    </div>
                </div>

                <div className='bg-white h-[132px]  px-[30px] py-[20px] rounded-2xl shadow-2xl '>
                    <div className='flex space-x-5 items-center '>
                        <FiMessageSquare className='text-[#00BAC7] text-[30px]'/>
                        <div>
                            <h3 className='text-[18px] text-[#00BAC7] font-semibold'>Dukungan Komunitas</h3>
                            <p>Sebuah server Discord berisi teman-teman yang akan membantu kamu.</p>
                        </div>
                        <div className='bg-[#00BAC7]  flex justify-center items-center bg-opacity-5 w-[40px] h-[40px] rounded-full'>
                        <AiOutlineArrowRight className='text-[24px] text-[#00BAC7]   rounded-full '/>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
    </div>
  )
}

export default Section4