'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import './style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade,Autoplay,Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [secondDropDown, setSecondDropDown] = useState(false)
    const [thirdDropDown, setThirdDropDown] = useState(false);
    const sliderImages = [
        {
            img:'/Slider_img_1_Big.jpg',
            alt:'',
        },
        {
            img:'/Slider_img_2_big.jpg',
            alt:'',
        },
        {
            img:'/Slider_img_4_Big.jpg',
            alt:'',
        },
    ]

return <div className='h-[100vh] w-full'>
    <div className='flex flex-row items-center text-white justify-center gap-20 w-full absolute py-6 px-5 z-10'>
        <div className='flex flex-row gap-20'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>HOME</div>
        <Link href='/aboutus'>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>ABOUT US</div>
        </Link>
        <div className='relative flex flex-row items-center gap-3' onMouseEnter={()=> setSecondDropDown(true)} onMouseLeave={()=> setSecondDropDown(false)}>
            
            <span className='hover:text-golden cursor-pointer'>PROJECTS</span>
                   {
        secondDropDown && 
        <div className='flex flex-col  px-3 py-3 left-[-13px]  absolute top-[25px] gap-3  rounded-xl '>
            <Link href='/csr'>
            <div className='hover:text-golden text-[16px]'>Heritage</div>
            </Link>
        </div> 
       } 
            
            </div>



        </div>
        <div>
            <img src="/binSadiqLogo.png" alt="" className='w-[100px] h-[100px]'/>
        </div>
        <div className='flex flex-row items-center gap-20'>
           
        <div className='relative text-[18px] font-semi-bold cursor-pointer  flex flex-row items-center gap-2' onMouseEnter={()=> setDropDown(true)} onMouseLeave={()=> setDropDown(false)}>
            <span className='hover:text-golden'>CSR</span>
            

       {
        dropDown && <div className='flex flex-col  px-3 py-3 left-[-15px] absolute top-[25px] gap-3  rounded-xl w-[300px]'>
            <Link href='/csr'>
            <div className='hover:text-golden text-[16px]'>Bin Sadiq Foundation</div>
            </Link>
            <Link href="/bin-sadiq-law-associates">
            <div className='hover:text-golden text-[16px]'>Bin Sadiq Law Associates</div>
            </Link>
        </div> 
       } 
        </div>
        
        

        <div className='relative text-[18px] font-semi-bold cursor-pointer  flex flex-row items-center gap-2' onMouseEnter={()=> setThirdDropDown(true)} onMouseLeave={()=> setThirdDropDown(false)}>
           <span className='hover:text-golden'> PEOPLE </span>
           
        {
        thirdDropDown && <div className='flex flex-col text-left px-3 py-3 left-[-15px] absolute top-[25px] gap-3  rounded-xl w-[150px]'>
            <Link href='/usama-sadiq'>
            <div className='hover:text-golden text-[16px]'>Usama Sadiq</div>
            </Link>
            <Link href="/our-team">
            <div className='hover:text-golden text-[16px]'>Our Team</div>
            </Link>
        </div> 
       } 

            </div>
        <div className='text-[18px] font-semi-bold cursor-pointer hover:text-golden'>BLOG</div>
        </div>
    </div>
    <Swiper   effect={'fade'} modules={[EffectFade,Autoplay, Pagination,Navigation]} autoplay={{
          delay: 1500,
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