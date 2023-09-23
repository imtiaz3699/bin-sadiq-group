"use client"
import FadeInElement from "@/components/fadedAnimations/page";

import FadedAnimationElement from "@/components/fadedAnimations/page";
import React,{useEffect} from "react"
import InViewElement from "../InViewElement/InViewElement";
export default  function CoreValues () {
    const [show,setShow] = React.useState<boolean>(false);
    const [show2,setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);
useEffect(()=> {
const timer = setTimeout(()=> {
    setShow(true);
},2000)
},[])

    const data = [
        {
            img:'/core1.png',
            firstLine:'WE ACT WITH',
            secondLine:'INTEGRITY',
        },
        {
            img:'/core2.png',
            firstLine:'WE BELIEVE IN',
            secondLine:'MUTUAL RESPECT',
        },
        {
            img:'/core3.png',
            firstLine:'WE ARE DEVOTED',
            secondLine:'INNOVATION',
        },
        {
            img:'/core4.png',
            firstLine:'WE BUILD TRUST THROUGH',
            secondLine:'TRANSPARENCY',
        },
        {
            img:'/core5.png',
            firstLine:'CUSTOMER SATISFACTION',
            secondLine:'IS OUR FIRST PRIORITY',
        },
        
    ]

    return <div className="bg-[#CFB156] text-center  pt-20  sm:py-20">
        <div className="container mx-auto ">

<InViewElement 
            targetId="element-2"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="element-out-of-view"
            >
                   {/* md:text-left   font-bold   */}
        <div className="text-[30px] sm:text-[40px] md:text-[64px] leading-[56px] text-center text-black font-bold ">OUR CORE VALUES</div>
</InViewElement>

      <div className="w-full flex flex-col items-center justify-center gap-5 sm:gap-10 md2:gap-20 pt-[30px] md2:pt-[150px]">
       <div className="w-full flex flex-col  xs:flex-row items-center justify-center gap-[10px] xl:gap-[150px]">
        <div className="w-full  sm:w-auto bg-black sm:bg-transparent  h-[250px] sm:h-auto flex flex-col md2:flex-row items-center justify-center gap-5">
            <InViewElement targetId="element-3"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
        "
            outOfViewClassName="element-out-of-view">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-[100px] md:h-[100px]  rounded-full flex flex-row items-center justify-center " >
            <img src='/core1.png' alt="" className="w-[70px] md:w-[80px]" />
            </div>
            </InViewElement>
                        
            
            <div className="w-[150px] h-[3px] md2:w-[3px] md2:h-[100px] bg-white"></div>
            <FadedAnimationElement>
                <>
            <p className={`w-[250px] text-white text-[20px] text-center md2:text-left  transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
            WE ACT WITH
            <span className="font-bold text-white sm:text-black">INTEGRITY</span>
            </p>
            </>
            </FadedAnimationElement> 
        </div>

        <div className="  flex flex-col md2:flex-row items-center justify-center gap-5">
        <InViewElement targetId="element-4"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="element-out-of-view">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-[100px] md:h-[100px]  rounded-full flex flex-row items-center justify-center" >
            <img src="/core2.png" alt="" className="w-[70px] md:w-[80px]"/>
            </div>
            </InViewElement>
            
            
            <div className="w-[150px] h-[3px] md2:w-[3px] md2:h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-[20px] text-center md2:text-left text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
                WE BELIEVE IN
                <span className="font-bold  text-black">MUTUAL RESPECT</span>
            </div>
            </>
            </FadeInElement>
        </div>
        </div>







        <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-[10px] xl:gap-[150px]">
     
     
        <div className="w-full sm:w-auto bg-black sm:bg-transparent  h-[250px] sm:h-auto flex flex-col md2:flex-row items-center justify-center gap-5">
        <InViewElement targetId="element-3"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="element-out-of-view">
<div className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-[100px] h-[100px]  rounded-full flex flex-row items-center justify-center " >
            <img src="/core3.png" alt="" className="w-[70px] md:w-[80px]"/>
            </div>
            </InViewElement>
            
            
            <div className="w-[150px] h-[3px] md2:w-[3px] md2:h-[100px] bg-white"></div>
           <FadeInElement>
            <>
            <div className={`w-[250px] text-[20px] text-center md2:text-left text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
            WE ARE DEVOTED
            <span className="font-bold text-white sm:text-black">INNOVATUION</span>
            </div> 
            </>
            </FadeInElement>
        </div>

        <div className=" flex flex-col md2:flex-row items-center justify-center gap-5">
        <InViewElement targetId="element-3"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="element-out-of-view">
<div className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-[100px] h-[100px]  rounded-full flex flex-row items-center justify-center" onMouseEnter={()=> setShow4(true)}>
            <img src="/core4.png" alt="" className="w-[70px] md:w-[80px]"/>
            </div>
            </InViewElement>
            
            
            <div className="w-[150px] h-[3px] md2:w-[3px] md2:h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-white text-center md2:text-left transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-[20px] text-black`}>
                WE BUILD TRUST THROUGH
                <span className="font-bold  text-black">TRANSPARENCY</span>
            </div>
            </>
            </FadeInElement>
        </div>


        </div>



        </div>
        <div className="text-black mt-5 md2:mt-20 flex flex-row justify-center">
            <div className="w-full   bg-black sm:bg-transparent h-[250px] sm:h-auto  flex flex-col md2:flex-row items-center justify-center gap-5">
            <InViewElement targetId="element-3"
            inViewClassName="animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards
            "
            outOfViewClassName="element-out-of-view">
<div className="transition-transform duration-300 ease-in-out transform hover:scale-125 w-[100px] md:h-[100px]  rounded-full flex flex-row items-center justify-center" onMouseEnter={()=> setShow4(true)}>
            <img src="/core5.png" alt="" className="w-[70px] md:w-[80px]"/>
            </div>
            </InViewElement>
            
            
            <div className="w-[150px] h-[3px] md2:w-[3px] md2:h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-white  text-[20px] text-center md2:text-left transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0  flex flex-col text-left text-black`}>
                WE BUILD TRUST THROUGH
                <span className="font-bold text-white sm:text-black">TRANSPARENCY</span>
            </div>
            </>
            </FadeInElement>


            
        </div>
        </div>
        </div>
    </div>
}