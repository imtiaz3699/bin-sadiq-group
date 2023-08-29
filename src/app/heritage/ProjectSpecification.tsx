"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles.css'
// import required modules
import { FreeMode,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import InViewElement from '@/components/InViewElement/InViewElement';

export default function ProjectSpecification () {

    const data = [
        {
            name:'Total Area',
            value:'20,000 sq.ft',
        },
        {
            name:'Spacious Shops',
            value:18,
        },
        {
            name:'Offices',
            value:'05',
        },
        {
            name:'Apartments',
            value:'15',
        },
        {
            name:'Floors',
            value:'LG+G+05',
        },
        {
            name:'Location',
            value:'Most Prestigious location of Bahria Paradise',
        },
        {
            name:'View',
            value:'Sun facing,Corner',
        },
    ]

    const imageData = ['/heritage1.png','/heritage2.png','/heritage3.png','/heritage4.png','/heritage5.png','/heritage6.png','/heritage7.png','/heritage8.png']
    const sliderImage= [
        {
            img:'/showCase1.png',
        },
        {
            img:'/showCase2.png',
        },
        {
            img:'/showCase3.png',
        },
        {
            img:'/showCase1.png',
        },
    ]
    const secondImageData = [
        {
            img:'',
            icon:'',
            definition:'fasdfs',
        },
        
    ]
    return <div className="py-20 flex flex-col ">
        <InViewElement targetId="element-5"
            inViewClassName=" trnaslate-x-0 duration-300 transition-all duration-500 transform "
            outOfViewClassName="-translate-x-[100%] ">
        <h1 className="text-golden font-bold text-center text-[30px] sm:text-[40px] md:text-[64px] font-bold leading-[56px] text-golden text-center">PROJECT SPECIFICATION</h1>
        </InViewElement>
        
        <div className="flex flex-col items-center mt-20 text-white">
           {
            data.map((element,idx)=> {
                return <div className="flex flex-row items-center justify-between border-b-2 border-white text-gray-300 py-2 w-full md:w-[800px]" key = {idx}>
                    <InViewElement targetId="element-6"
            inViewClassName=" trnaslate-x-0 duration-1000 transition-all duration-500 transform"
            outOfViewClassName="-translate-x-[100%]">
                <span className="text-[16px] md:text-[20px] flex flex-row items-center pl-3 md:pl-0"> <span className='hidden md:flex'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> {element.name}</span>
                </InViewElement>
                <InViewElement targetId="element-7"
            inViewClassName=" trnaslate-x-0 duration-1000 transition-all duration-500 transform "
            outOfViewClassName="translate-x-[100%]">
                <span className="text-center text-[16px] md:text-[20px] w-[200px]  md:w-[300px] flex flex-row items-end justify-end pr-3 md:pr-0">{element.value}  <span className='hidden md:flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </span>
                </InViewElement> 
            </div>
            })
           } 
        </div>
    <div className="flex flex-row items-center justify-between mt-[50px] md:mt-[150px] px-3 w-[100%]">
           {
            imageData.map((element,idx)=> {
                return <img src={element} alt="" className="w-28 h-28"/>
            })
           } 
    </div>
    <div className="flex flex-col items-center mt-[50px] md:mt-[150px]">
        <InViewElement targetId="element-8"
            inViewClassName="duration-1000 transition-all duration-500 transform animate-fade-down  animate-ease-out animate-alternate animate-fill-both "
            outOfViewClassName="asdf">
        <h1 className="text-golden font-bold text-center text-[30px] sm:text-[40px] md:text-[64px] font-bold leading-[56px] text-golden text-center drop-shadow-2xl">FEATURED UNITS</h1>
        </InViewElement>
       <div className="flex flex-col items-center justify-center gap-[80px] mt-[50px] md:mt-[140px]">
        <div className="flex flex-col xl:flex-row items-center gap-[80px] xl:gap-[249px]">

            <div className="w-full h-[200px] sm:w-[400px] h-[200px] md:w-[527px] md:h-[298px] rounded-[21px] bg-cover drop-shadow-2xl rounded-[21px] overflow-hidden relative transform transition-transform duration-300 hover:scale-105" style = {{backgroundImage:`url(/Shop.png)`}}>
            <div className="flex flex-col items-center justify-center w-full h-full py-2 bg-green-800 opacity-50 rounded-[21px]">
                <img src='/Shops-01.png' alt="" className="w-[70px] h-[40px] md:w-[100px] md:h-[72px]"/>
                <p className="max-w-[284px] px-1 text-golden text-[16px] text-center md:text-[18px]">The Heritage Paradise features premium spacious outlets within your budget. Invest today, and get the best returns of your investment</p>
            </div>
           </div>


        
           <div className="w-full h-[200px] sm:w-[400px] sm:h-[200px] md:w-[527px] md:h-[298px] rounded-[21px] bg-cover drop-shadow-2xl rounded-[21px] overflow-hidden relative transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: "url(/Appartment.png)" }}>
            <div className="flex flex-col items-center justify-center w-full h-full bg-green-800 opacity-50 rounded-[21px]">
            <img src="/Appartment-01.png" alt="" className="w-[100px] h-[72px]" />
            <p className="max-w-[284px] px-1 text-golden text-[16px] text-center md:text-[18px]">The Heritage Paradise features premium spacious outlets within your budget. Invest today, and get the best returns of your investment</p>
            </div>
            </div>
        </div>


        <div className="w-full h-[200px] sm:w-[400px] sm:h-[200px] md:w-[527px] md:h-[298px] rounded-[21px] bg-cover drop-shadow-2xl rounded-[21px]  overflow-hidden relative transform transition-transform duration-300 hover:scale-105" style = {{backgroundImage:`url(/Office.png)`}}>
        <div className="flex flex-col items-center justify-center w-full h-full bg-green-800 opacity-50 rounded-[21px]">
        <img src="/Office-01.png" alt="" className="w-[100px] h-[72px]"/>
        <p className="max-w-[284px] px-1 text-golden text-[16px] text-center md:text-[18px]">The Heritage Paradise features premium spacious outlets within your budget. Invest today, and get the best returns of your investment</p>
        </div>    
        </div>
        </div> 
        
    </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-[29px] mt-[139px]">
           <button className="border-[3px] border-golden w-[251px] h-[78px] text-[24px] text-white">View Floor Plan</button>
           <div className="w-[100px] h-[4px] md:w-[4px] md:h-[100px] bg-golden"></div>
           <button className="border-[3px] border-golden w-[251px] h-[78px] text-[24px] text-white">View Broucher</button>
</div>

<div className="flex flex-row justify-center w-full mt-[200px]">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            sliderImage.map((element,idx)=> {
                return <SwiperSlide>
            <div className='w-[488px] h-[275px]'>
            <img src={element.img} alt="" className='w-full h-full bg-cover'/>
        </div>
        </SwiperSlide>
    })
}         
      </Swiper>
</div>
    </div>
} 