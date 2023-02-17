import React from 'react'
import Carausel from './slider'

function Section8() {
  return (
<div className="max-w-7xl mx-auto relative overflow-hidden">
    <div className='max-w-6xl mx-auto bg-[#EDFCFD] py-32 px-5 rounded-2xl mt-24'>
        <div className='flex flex-wrap max-w-5xl md:space-x-5  mx-auto items-center'>
        <div className='w-full md:w-1/2'>
            <div className='flex items-center space-x-3'>
                <span className='h-1 w-7 bg-[#00BAC7]'></span>
                <p className='text-[#00BAC7]'>TESTIMONIAL</p>
            </div>
            <h3 className='text-[32px] font-semibold'>Apa kata orang-orang yang membaca buku ini?</h3>
        </div>
        <div className='w-full md:w-5/12'>
            <p>Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku ini.</p>
        </div>
        </div>
        <Carausel/>
    </div>
    </div>
  )
}

export default Section8