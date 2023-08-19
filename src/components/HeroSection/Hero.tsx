'use client'
import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import CoreValues from '../Core_Values/CoreValues';
import Footer from '@/app/footer/page';
import ContinuousSlider from './Sliders';
import FadeInElement from '../fadedAnimations/page';
// import './hero.css'
import InfiniteCarousel from './InfiniteCarousel';
import Carousel from './InfiniteCarousel';
import ImageSlider from './AnotherSlider';

export default  function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [state, setState] = useState(0);
const logos = ['/bin-sadiq-group.png','/association.png','/heritage.png','/law-association.png','/foundation.png','/law-association.png','/law-association.png']
const ourServices  = [
    {
        img:'/image 1.png',
        name:'ASSET MANAGEMENT',
    },
    {
        img:'/image 2.png',
        name:'INVESTMENT CONSULTANCY',
    },
    {
        img:'/image 3.png',
        name:'MARKETING & SALES',
    },
]

const text = 'At Bin Sadiq, we offer a comprehensive range of real estate services to meet all your needs. Whether you are looking to buy, sell, or rent a property, or need assistance with property management or construction, we have the expertise and resources to help you achieve your goals.'
useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10); // Adjust the typing speed (milliseconds)
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  
    return (
        <>
        <div className='w-full '>
        <div className='bg-lead-color'>

            <div className="flex container mx-auto flex-row  justify-center  text-black py-56 gap-20 ">
                <div className=' flex flex-col'>
                        <h1 className='text-golden font-bold text-[48px] leading-[56px]'>CREATING SPACES <br />THAT INSPIRES </h1> 
                        <div className='max-w-[602px] text-white mt-5'>Having the inheritance and elegance of the past with the comfort and convenience of modern living. BIN SADIQ offers a unique opportunity to own residential and commercial places in the Heart of Twin cities, with restored heritage buildings and modern residences that feature state-of-the-art amenities and stunning views. Discover a world of timeless beauty, sophistication, and exclusivity at BIN SADIQ.</div>
                </div>                
                <div className='w-[452px] hover:translate-x-10 transition-transform duration-1000 group h-[514px] rounded-tr-[125px] rounded-xl  bg-cover hover:drop-shadow-2xl hover:shadow-2xl relative' 
                style = {{backgroundImage:'url(/Pic2.png)'}}>

                    <div className='w-[410px] group-hover:translate-y-2 group-hover:translate-x-3 transition-transform duration-1000 h-[420px] overflow-hidden rounded-bl-[50px] hover:drop-shadow-2xl hover:shadow-2xl bg-cover absolute bottom-0 translate-y-[100px] right-0 translate-x-[100px]' style = {{backgroundImage:'url(/Pic1.png)'}}></div>
                </div>
                        
            </div>
            <CoreValues/>
            <div className=' text-black text-center py-10 pt-[200px]'>
                <FadeInElement>
                <div className='text-golden font-bold text-[80px] transition-transform duration-300 transform hover:scale-110 animate-bounce'>Why Choose Us</div>
                </FadeInElement>
            
                <div className='text-[22px]  font-semibold text-gray-500 text-white'>We've always tried to be different,a different approach to buisness & customer service,<br /> a different culture at work place. We believe in the importance of fresh thinking-in being <br /> green,  and approaching things in new and different ways.</div>
            </div>
            


<ImageSlider/>


                       
            <div className='py-20 '>
                <div className='container mx-auto text-center flex flex-col items-center justify-center'>
                        <h1 className='text-golden text-[64px] font-normal text-golden '>OUR SERVICES </h1>
                        <div className='max-w-[995px] text-[24px] leading-[27px] text-white mt-[41px]'> {text.slice(0, currentIndex)}</div>
                <div className='grid grid-cols-3 place-items-center mt-[150px] gap-[100px]'>
                      {
                        ourServices.map((element,idx)=> {
                            return <div className={`transition-transform duration-500 ease-in-out transform hover:scale-125 w-[342px] shadow-2xl drop-shadow-2xl h-[342px] flex flex-col items-center justify-center bg-golden rounded-[12px]`} key = {idx} onMouseEnter={()=> setState(idx)}>
                            <Image alt = "" src = {element.img} width = {99} height = {99}/>
                            <h1 className='font-bold text-[24px] max-w-[180px] mt-[31px]'>{element.name}</h1>
                            <button className='bg-black w-[150px] h-[35px] text-[12px] text-white mt-[80px] px-[14px]'>Read More....</button>
                        </div>
                        })
                      }  
                </div>
            </div>
            </div>

            
                    
                    <div className='bg-golden w-full  text-center py-20'>
                    <h1 className='text-[64px] leading-[76px]'>UPDATES</h1>
                          <div className='container mx-auto mt-[55px]'>
                            <div className='flex flex-row items-center justify-center gap-[25px]'>
                                    <Image alt = "" src = "/P-Post 5 1.png" width = {400} height = {400} className='transition-transform duration-700 transform hover:scale-105 hover:shadow-lg'/>
                                    <Image alt = "" src = "/Pre-Launch Post 1.png" width = {400} height = {400} className='transition-transform duration-700 transform hover:scale-105 hover:shadow-lg'/>
                                    <Image alt = "" src = "/Quote Post 10 1.png" width = {400} height = {400} className='transition-transform duration-700 transform hover:scale-105 hover:shadow-lg'/>
                            </div>
                            </div>  
                    </div>
                    
            
            </div>
            </div>
    </>
    )
};