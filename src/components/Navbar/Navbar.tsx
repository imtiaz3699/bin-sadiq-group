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
            img:'/3.jpg',
            alt:'',
        },
        {
            img:'/4.jpg',
            alt:'',
        },
        {
            img:'/home.png',
            alt:'',
        },
    ]

return <div className='h-[700px] w-full'>
    <div className='flex flex-row items-center justify-center gap-10 w-full absolute py-6 px-5 z-10'>
        <div className='flex flex-row gap-20'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>HOME</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>ABOUT US</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>PROJECTS</div>
        </div>
        <div>
            <img src="/binSadiqLogo.png" alt="" />
            
        </div>
        <div className='flex flex-row items-center gap-20'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>CSR</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>PEOPLE</div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-black'>BLOG</div>
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