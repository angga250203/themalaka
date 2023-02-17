import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carausel } from './data';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";


function Carausel() {
    const slider = React.useRef(null);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
      };
  return (
    
        <div className=' py-20'>
         <button  onClick={() => slider?.current?.slickPrev()} className=" shadow-2xl  shadow-[#00BAC7] rounded-full absolute left-0 bottom-72 z-50">
          <BsFillArrowLeftCircleFill className='text-[#00BAC7]   text-[50px]' />
        </button>
        <button onClick={() => slider?.current?.slickNext()} className="absolute shadow-2xl  shadow-[#00BAC7] rounded-full right-0 z-50 bottom-72">
          <BsFillArrowRightCircleFill className='text-[#00BAC7] text-[50px]'/>
        </button>
   
    <Slider ref={slider} {...settings}>

{carausel.map((cra) => {
    return(
        <div>
        <div className='w-[407px] h-[260px] shadow-xl  bg-white rounded-2xl' key={cra.id}>
        <p className='px-[30px] py-[30px]'>{cra.isi}</p>
        <div className='flex px-[30px] py-[30px] space-x-3'>
            <img src={cra.img}/>
            <div className=''>
                <p>{cra.nama}</p>
                <p className='text-[14px]'>{cra.status}</p>
            </div>
        </div>
      </div>
      </div>
    )
})}
     
     
       
    </Slider>
    </div>

  )
}

export default Carausel