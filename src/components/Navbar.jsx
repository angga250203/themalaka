import { useEffect, useState } from "react";
import Navbardropdown from "./navbardropdown";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);
  return (
    <nav className="bg-transparent relative mt-4">
    <div className="max-w-6xl mx-auto px-5 ">
      <div className="h-24 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-tertiary-300 relative">
        {/* Icon */}
        <a href="/">
            <div className="flex items-center">
            <h3 className="bg-[#00BAC7] text-white px-4 py-3 rounded-full">M</h3>
            <h3 className="text-white px-2 font-bold">The Malaka</h3>
            </div>
        </a>

        {/* Hamburger */}
        <div
          onClick={handleOpen}
          className={`${
            isOpen ? "open" : ""
          } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
        >
          <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-sm lg:text-base fontLinkbody">
        <a href="/" className="font-semibold text-white">
            Top
          </a>
        <a href="/" className=" text-gray-400">
        For Everyone
          </a>
        <a href="/" className="text-gray-400">
        Benefit
          </a>
        <a href="/" className="text-gray-400">
        Preview
          </a>
        <a href="/" className="text-gray-400">
        Penulis
          </a>
        
        </div>

        <div className="hidden md:flex">
            <a  className="bg-white px-5 py-2 rounded-2xl">Download</a>
        </div>

      </div>
       

      {/* Navbar Menu (Mobile) */}
      <Navbardropdown isOpen={isOpen} />
    </div>
  </nav>
  )
}

export default Navbar