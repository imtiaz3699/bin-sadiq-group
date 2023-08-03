'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import './style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';

const Navbar = () => {
    const sliderImages = [
        {
            img:'/Slider_img_2.jpg',
            alt:'',
        },
        {
            img:'/Slider_img_4.jpg',
            alt:'',
        },
        {
            img:'/home.png',
            alt:'',
        },
    ]

return <div className='h-[700px] w-full'>
    <div className='flex flex-row items-center text-white justify-center gap-10 w-full absolute py-6 px-5 z-10'>
        <div className='flex flex-row gap-20'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>HOME</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>ABOUT US</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>PROJECTS</div>
        </div>
        <div>
            <img src="/binSadiqLogo.png" alt="" />
            
        </div>
        <div className='flex flex-row items-center gap-20'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>CSR</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>PEOPLE</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>BLOG</div>
        </div>
    </div>
    <Swiper navigation={true} modules={[Autoplay, Pagination,Navigation]} autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}  className="mySwiper w-[100%] h-[100%]">       
       {
        sliderImages.map((element,idx)=> {
            return (
              <SwiperSlide key = {idx}>
                         <img src={element.img} alt="" className='object-cover w-full h-full' />
            </SwiperSlide>      
            )
        })
       } 
      </Swiper>
</div>
}
export default Navbar;