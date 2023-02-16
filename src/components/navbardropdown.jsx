import React from 'react'

function Navbardropdown({ isOpen }) {
  return (
    <div
    className={`${
      isOpen ? "translate-y-0" : "-translate-y-full"
    } pt-[75.55px] md:hidden backdrop-blur-xl bg-white/30 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}

  >
    <div className="flex flex-col gap-16 mt-16">
      <div className="flex flex-col gap-8 items-center text-white font-semibold">
        <a href="/">
          <p className="">Home</p>
        </a>
    
     
      </div>

    </div>
  </div>
  )
}

export default Navbardropdown