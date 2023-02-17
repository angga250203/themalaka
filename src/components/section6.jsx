import React from 'react'
import Card from './card'

function Section6() {
  return (
    <div className='bg-[#EDFCFD] h-[250vh] md:h-[130vh] '>
    <div className='bg-[#272D3E]   -skew-y-3 rounded-tr-[2rem] rounded-bl-[2rem] py-24'>
        <div className='max-w-6xl mx-auto skew-y-3 px-5'>
        <div className='flex justify-center '>
            <p className='text-center py-2 rounded-full bg-[#00BAC7] bg-opacity-5 w-[126px] text-[#00BAC7]'>HARGA BUKU</p>
            </div>
            <h3 className='text-center text-white text-[25px] md:text-[32px] max-w-2xl mx-auto '>Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu</h3>
            <p className='text-center text-gray-300 text-[16px] md:text-[18px] max-w-lg mx-auto py-5 mb-12'>Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi undang-undang.</p>
            <Card/>
            <p className='text-center text-white py-12  max-w-sm mx-auto'>*Buku digital akan dikirimkan ke alamat email kamu
*Buku fisik dikirim 7 hari setelah pemesanan</p>
        </div>
    </div>
    </div>
  )
}

export default Section6