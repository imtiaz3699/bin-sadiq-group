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
import CoreValues from '../Core_Values/CoreValues';
export default  function Hero() {
    return (
        <div className='bg-white'>
            <div className="flex flex-row items-center justify-center bg-white text-black pt-20 px-20 gap-20 ">
                <div className="border rounded-xl w-[426px] h-[369px] drop-shadow-2xl overflow-hidden">
                <Swiper navigation={true} modules={[Autoplay, Pagination,Navigation]} autoplay={{delay: 2500, disableOnInteraction: true,}}  className="mySwiper w-[100%] h-[100%] ">       
                <SwiperSlide >
                         <img src="/sign-bord.jpg" alt="" className='object-cover w-[full] h-full ' />
                </SwiperSlide>      
            </Swiper>
                </div>
                <div >
                <div className="text-[50px] font-bold ">WELCOME TO BIN SADIQ
                <br /> A LIVING LEGACY</div>
                <div className="w-[700px]">Having the inheritance and elegance of the past with the comfort and convenience of modern living.BIN SADIQ offers a unique opportunity to own residential and commercial places in the Heart of Twin cities, with restored heritagwe buildings and modern residences that feature state-of-the-art amenities and stunning views. Discover a world of timeless beauty,sophistication,and exclusivity at BIN SADIQ.</div>
                </div>

                
            </div>
            {/* <div className='bg-white'>
                    <img src="/Core_values.png" alt="" />
            </div> */}
            <CoreValues/>
                <div className='bg-white text-black text-center py-10'>
                    <div className='text-golden font-bold text-[80px] '>Why Choose Us</div>
                    <div className='text-[22px]  font-semibold text-gray-500'>We've always tried to be different,a different approach to buisness & customer service,<br /> a different culture at work place. We believe in the importance of fresh thinking-in being <br /> green,  and approaching things in new and different ways.</div>
                    {/* <img src="/why_choose_us.png" alt="" /> */}
                </div>
                
                <div className='bg-white'>
                    <img src="/Goc.jpg" alt="" />
                </div>
                <div className='bg-white  '>
                    <img src="/Landmarks.jpg" alt="" className='object-cover w-full h-full'/>
                </div>
                
            </div>
    )
};