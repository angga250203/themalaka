import React from 'react'

function Section7() {
  return (
    <div className='max-w-6xl mx-auto mt-60 px-5'>
        
         <div className='flex flex-wrap pt-56 items-center'>
            <div className='w-full md:w-1/2 relative '>
                <img src='/gambar/g23.png' className='absolute -z-10'/>
                <img src='/gambar/avatar.png' className=''/>
                <div className='w-[292px] h-[99px] bg-[#00BAC7] rounded-xl px-[35px] py-[25px] absolute bottom-12'>
                    <h3 className='text-white text-[20px]'>Muhamad Nauval Azhar</h3>
                    <p className='text-gray-300'>@mhdnauvalazhar</p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <p className='text-[#00BAC7]'>PENULIS BUKU</p>
                <h3 className='text-[32px] py-5 font-semibold'>Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini</h3>
                <p>“Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”</p>
            </div>
        </div>
    </div>
  )
}

export default Section7