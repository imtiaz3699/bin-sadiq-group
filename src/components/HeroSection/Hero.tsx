'use client'
import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import CoreValues from '../Core_Values/CoreValues';
import Footer from '@/app/footer/Footer';
import ContinuousSlider from './Sliders';
import FadeInElement from '../fadedAnimations/page';
// import './hero.css'
import { motion, useScroll, useTransform,inView,animate } from "framer-motion";
import InfiniteCarousel from './InfiniteCarousel';
import Carousel from './InfiniteCarousel';
import ImageSlider from './AnotherSlider';
import InViewElement from '../InViewElement/InViewElement';
import MyNavbar from '@/app/my-navbar/MyNavbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { lato } from '@/app/layout';

export default  function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [state, setState] = useState(0);
    const [isInView, setIsInView] = useState(false);

    
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

const text = 'At Bin Sadiq, we offer a comprehensive range of real estate services to meet all your needs. Whether you are looking to buy, sell, or rent a property, or need assistance with property management or construction, we have the expertise and resources to help you achieve your goals.'
useEffect(() => {
    
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10); // Adjust the typing speed (milliseconds)
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  const { scrollY } = useScroll()



const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });
};

useEffect(() => {
  const observer = new IntersectionObserver(handleIntersection);

  const targetElement = document.getElementById('in-view-element');

  if (targetElement) {
    observer.observe(targetElement);
  }

  return () => {
    if (targetElement) {
      observer.unobserve(targetElement);
    }
  };

}, []);

    return (
        <>
        <div>

        <MyNavbar/>
        <div className='overflow-hidden'>
        <Swiper   effect={'fade'} modules={[EffectFade,Autoplay, Pagination,Navigation]} autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}  className="mySwiper w-[100vw] h-[100%]">       
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
        </div>

        <div className='w-full '>
        <div className='bg-lead-color'>
            <div className="flex container mx-auto flex-col items-center xl:flex-row justify-center text-black px-3 py-10 xl:py-56 gap-10 lg:gap-16 xl:gap-20 ">
                <div  className='flex flex-col'>
                        <h1
                        id='in-view-element'
                        className={isInView ? 'text-golden font-bold text-center md:text-left text-[30px]  sm:text-[40px] md:text-[64px]  font-bold  leading-[56px] animate-fade-right animate-once animate-ease-linear' : "outOfViewClassName"} >CREATING SPACES <br />THAT INSPIRES </h1> 
                        <div className={`max-w-[602px] text-white mt-5 text-[18px] ${lato.className} sm:text-[20px] md:text-[25px] text-center md:text-left`}>Having the inheritance and elegance of the past with the comfort and convenience of modern living. BIN SADIQ offers a unique opportunity to own residential and commercial places in the Heart of Twin cities, with restored heritage buildings and modern residences that feature state-of-the-art amenities and stunning views. Discover a world of timeless beauty, sophistication, and exclusivity at BIN SADIQ.</div>
                </div>          
                <Image alt = '' src = "/Pic2.png" width={300} height={300} className='sm:hidden'/>      
                <div className='hidden sm:block w-[452px] md:hover:translate-x-10 transition-transform duration-1000 group  h-[514px] sm:rounded-tr-[125px] sm:rounded-xl  md:bg-cover hover:drop-shadow-2xl hover:shadow-2xl relative' 
                style = {{backgroundImage:'url(/Pic2.png)'}}>

                    <div className='hidden md:block w-[410px] group-hover:translate-y-2 group-hover:translate-x-3 transition-transform duration-1000 h-[420px] overflow-hidden rounded-bl-[50px] hover:drop-shadow-2xl hover:shadow-2xl bg-cover absolute bottom-0 translate-y-[100px] right-0 translate-x-[100px]' style = {{backgroundImage:'url(/Pic1.png)'}}></div>
                </div>       
            </div>
            <CoreValues/>
            <div className=' text-black text-center py-20 flex flex-col items-center  gap-5'>
                <InViewElement  targetId="element-1"
  inViewClassName="animate-fade-down animate-once animate-ease-linear"
  outOfViewClassName="element-out-of-view">
                <div className={ 'text-golden font-bold text-center text-[30px] sm:text-[40px] md:text-[64px] font-bold leading-[56px] transition-transform duration-300 transform'}>Why Choose Us</div>
                </InViewElement>
                <div className={`text-[18px] px-3 md:text-[22px] text-gray-500 text-white ${lato.className} `}>We've always tried to be different,a different approach to buisness & customer service,<br /> a different culture at work place. We believe in the importance of fresh thinking-in being <br /> green,  and approaching things in new and different ways.</div>
            </div>
<ImageSlider/>     
            <div className='py-20 '>
                <div className='container mx-auto text-center flex flex-col items-center justify-center'>
                  <InViewElement  targetId="element-10"
  inViewClassName="animate-flip-down animate-once animate-ease-linear"
  outOfViewClassName="element-out-of-view">
                        <h1 id='animate' className='text-golden font-bold text-center md:text-left text-[30px] sm:text-[40px] md:text-[64px]  font-bold  leading-[56px] animate-fade-right animate-once animate-ease-linear'>OUR SERVICES </h1>
                        </InViewElement>
                        <div className={`max-w-[995px] text-[18px] px-3 md:text-[22px]   text-gray-500 text-white mt-5 ${lato.className}`}> { text.slice(0, currentIndex) }</div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mt-[150px] gap-[50px] sm:gap-[100px] w-full px-5'>
                      {
                        ourServices.map((element,idx)=> {
                            return <div className={`transition-transform duration-500 ease-in-out transform hover:scale-125 w-full sm:w-[342px] shadow-2xl drop-shadow-2xl" px-5 py-5 h-auto sm:h-[342px] flex flex-col items-center justify-center bg-golden rounded-[12px]`} key = {idx} onMouseEnter={()=> setState(idx)}>
                            <img src={element.img} alt="" className='w-[99px] h-[99px]'/>
                            <h1 className='font-bold text-[24px] max-w-[180px] mt-[31px]'>{element.name}</h1>
                            <button className='bg-black w-[150px] h-[35px] text-[12px] text-white mt-[80px] px-[14px]'>Read More....</button>
                        </div>
                        })
                      }  
                </div>
            </div>
            </div>                    
            <div className='bg-golden w-full  text-center py-20'>
                    <h1 className='font-bold text-center text-[30px] sm:text-[40px] md:text-[64px] font-bold leading-[56px]'>UPDATES</h1>
                          <div className='container mx-auto mt-[55px]'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-[25px] px-5'>
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