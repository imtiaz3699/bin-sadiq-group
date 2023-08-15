'use client'
import React, { useRef, useState,useEffect } from 'react';
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
import Footer from '@/app/footer/page';
import ContinuousSlider from './Sliders';

export default  function Hero() {
const logos = ['/foundation.png','/association.png','/heritage.png','/law-association.png','/bin-sadiq-group.png']


    return (
        <>
        <div className='bg-cover w-full h-[3000px]' style = {{backgroundImage:'url(/bg-image.jpg)'}}>
            <div className='bg-black  w-full h-[3000px] ' style = {{opacity:'0.7'}} >

            <div className="flex flex-row items-center justify-center  text-black pt-[200px] px-20 gap-20 ">
                <div className="border rounded-xl w-[426px] h-[369px] drop-shadow-2xl overflow-hidden">
                <Swiper navigation={true} modules={[Autoplay, Pagination,Navigation]} autoplay={{delay: 2500, disableOnInteraction: true,}}  className="mySwiper w-[100%] h-[100%] ">       
                <SwiperSlide >
                         <img src="/sign-bord.jpg" alt="" className='object-cover w-[full] h-full ' />
                </SwiperSlide>      
                </Swiper>
                </div>
                <div className=''>
                <div className="text-[50px] font-bold text-golden">WELCOME TO BIN SADIQ
                <br /> A LIVING LEGACY</div>
                <div className="w-[700px] text-white">Having the inheritance and elegance of the past with the comfort and convenience of modern living.BIN SADIQ offers a unique opportunity to own residential and commercial places in the Heart of Twin cities, with restored heritagwe buildings and modern residences that feature state-of-the-art amenities and stunning views. Discover a world of timeless beauty,sophistication,and exclusivity at BIN SADIQ.</div>
                </div>                
            </div>
            <CoreValues/>
            <div className=' text-black text-center py-10 pt-[200px]'>
                <div className='text-golden font-bold text-[80px] '>Why Choose Us</div>
                <div className='text-[22px]  font-semibold text-gray-500 text-white'>We've always tried to be different,a different approach to buisness & customer service,<br /> a different culture at work place. We believe in the importance of fresh thinking-in being <br /> green,  and approaching things in new and different ways.</div>
            </div>
            <div className='bg-lead-color flex flex-row items-center justify-center mt-56'>
                <ContinuousSlider/>
            </div>
            </div>
            </div>            
            </>
    )
};