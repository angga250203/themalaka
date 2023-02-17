import React from 'react'

function Footer() {
  return (
    <div className='bg-[#272D3E] py-24 rounded-tr-[3rem]'>
        <div className='max-w-6xl mx-auto px-5'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <h3 className='text-[26px] text-white'>Sudah siap meningkatkan skill kamu?</h3>
                    <p className='text-gray-300 text-[18px] py-3'>Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
                pertanyaan kamu di halaman bantuan.</p>
                </div>
                <div className='w-full md:w-5/12 flex space-x-5'>
                    <div className='w-1/2 bg-[#353B4B] h-[71px] flex justify-center items-center rounded-2xl'>
                        <p className='text-white'>Pusat Bantuan</p>
                    </div>
                    <div className='w-1/2 bg-[#00BAC7] h-[71px] flex justify-center items-center rounded-2xl'
                    > <p className='text-white'>Mendaftar</p></div>
                </div>
            </div>


            <div className='flex flex-wrap py-24 items-center'>
                <div className="w-full md:w-6/12">
                    <p className='text-white bg-[#00BAC7] h-[50px] w-[50px] flex items-center justify-center rounded-full'>M</p>
                    <p className='text-white py-3'>The Malaka</p>
                    <p className='text-gray-300'>Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia,<br/> mulai dari pengembangan hingga desain grafis.</p>
                </div>
                <div className="w-full md:w-6/12 flex space-x-8 px-5">
                    <div className='w-6/12 md:w-4/12 text-gray-300'>
                        <p className='font-semibold py-3'>PRODUCTS</p>
                        <p className='py-1'>Courses</p>
                        <p className='py-1'>Books</p>
                        <p className='py-1'>Freebies</p>
                        <p className='py-1'>Classes</p>
                    </div>
                    <div className='w-6/12 md:w-4/12 text-gray-300'>
                    <p className='font-semibold py-3'>COMPANY</p>
                        <p className='py-1'>About Us</p>
                        <p className='py-1'>Contact</p>
                        <p className='py-1'>Privacy Policy</p>
                        <p className='py-1'>Terms of Service</p>
                        <p className='py-1'>Help</p>
                        </div>
                        <br/>
                    <div className='w-6/12 md:w-4/12 text-gray-300'>
                    <p className='font-semibold py-3'>GET IN TOUCH</p>
                        <p className='py-1'>Twitter</p>
                        <p className='py-1'>Facebook</p>
                        <p className='py-1'>Dribbble</p>
                     

                    </div>
                </div>



            </div>

         
                <p className='text-center text-gray-400 mt-12'>COPYRIGHT © 2022 — DESIGN NAUVAL</p>
     

        </div>
    </div>
  )
}

export default Footer