import React from 'react'

function Section2() {
  return (
    <div className='bg-[#00BAC7] py-24'>
        <div className='max-w-6xl mx-auto px-5 lg:px-0'>
            <div className='flex flex-wrap md:space-x-7'>
                <div className='w-full md:w-4/12'>
                    <div className='flex items-center space-x-2'>
                    <span className='bg-white w-5 h-1'></span>
                    <p className='text-white'>BUKU INI UNTUK SIAPA</p>
                    </div>
                    <h3 className='text-[32px] text-white'>Kata Pengantar Dari Penulis Buku</h3>

                    <div className='flex py-24 space-x-5'>
                        <img src="/gambar/orang1.png" className='object-cover' />
                        <div>
                        <h3 className='text-white lg:text-[18px] font-semibold'>Muhamad Nauval Azha</h3>
                        <p className='text-white'>@mhdnauvalazhar</p>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-7/12'>
                    <p className='text-white text-[18px]'>"Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2