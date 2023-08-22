'use client'
import React,{useEffect,useState} from "react";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Image from "next/image";
import ProjectSpecification from "./ProjectSpecification";
import Footer from "../footer/page";
import InViewElement from "@/components/InViewElement/InViewElement";

export default function Heritage () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [state, setState] = useState(0);
    const [isInView, setIsInView] = useState(false);

    const text = 'The heritage is a six-story hybrid building inspired by esthetical renaissance spanish architecture with modern living by bin sadiq group spacious shops,executive offices, and luxury serviced apartments. Investing in heritage is a low risk and high return oppotunity with both high capital appreciation and guaranteed rental income due to its prime location at bahria paradise, high quality construction, smart Homes and office technology, zero load shedding,access to luxury living facilities and proximity to Public transport.'
useEffect(() => {
    
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10); // Adjust the typing speed (milliseconds)
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  



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
    return <div className="bg-grean">
    <div style = {{backgroundImage:'url(/Main_Page.jpg)'}} className="h-[700px] ">
    <SecondNavbar/>
    </div>
    <div style = {{backgroundImage:'url(/edit.jpg)'}} className=" h-[700px] w-full bg-cover bg-no-repeat">
        <div className="w-[50%] h-full  py-20 float-right flex flex-col justify-center pl-20 bg-grean opacity-95 ">
            
           <Image alt = "" src = "/Heritage_logo.png" width={300} height = {100}/>
           
           
           <InViewElement targetId="element-4"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 translate-x-0 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="-translate-x-[100%]">

           <h1 className="font-bold text-[32px] font-normal leading-[38.41px] text-golden mt-28">OVERVIEW</h1>
           </InViewElement>
            <div className="w-[500px] text-white mt-5">{ text.slice(0, currentIndex) }</div>
        </div>
    </div>
<ProjectSpecification/>
<Footer/>

    </div>
}