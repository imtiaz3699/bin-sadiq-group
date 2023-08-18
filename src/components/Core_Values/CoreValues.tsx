"use client"
import FadeInElement from "@/components/fadedAnimations/page";

import FadedAnimationElement from "@/components/fadedAnimations/page";
import React,{useEffect} from "react"
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

    return <div className="bg-[#CFB156] text-center py-20">
        <div className="container mx-auto">
        <div className="text-[79px] text-black font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-white animate-shine">OUR CORE VALUES</div>
        <div className="flex flex-col items-center gap-20 pt-[150px]">


        <div className="flex flex-row items-center justify-center gap-[150px]">
        <div className=" flex flex-row items-center gap-5">
            <div className="transition-transform duration-300 ease-in-out duration-300 transform hover:scale-110 animate-bounce transform hover:scale-125 w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center " >
            <img src='/core1.png' alt="" className="w-[100px]  " />
            </div>
            
            <div className="w-[3px] h-[100px] bg-white"></div>
            <FadedAnimationElement>
                <>
            <p className={`w-[250px] text-white text-[20px]  transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
            WE ACT WITH
            <span className="font-bold drop-shadow-xl text-black">INTEGRITY</span>
            </p>
            </>
            </FadedAnimationElement> 
        </div>

        <div className=" flex flex-row items-center gap-5">

            <div className="transition-transform duration-300 ease-in-out duration-300 transform hover:scale-110 animate-bounce transform hover:scale-125 w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center " >
            <img src="/core2.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-[20px] text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
                WE BELIEVE IN
                <span className="font-bold text-black">MUTUAL RESPECT</span>
            </div>
            </>
            </FadeInElement>
        </div>
        </div>



        <div className="flex flex-row items-center justify-center gap-[150px]">
        <div className=" flex flex-row items-center gap-5">

            <div className="transition-transform duration-300 ease-in-out duration-300 transform hover:scale-110 animate-bounce transform hover:scale-125 w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center " >
            <img src="/core3.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-white"></div>
           <FadeInElement>
            <>
            <div className={`w-[250px] text-[20px] text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0 flex flex-col text-left text-black`}>
            WE ARE DEVOTED
            <span className="font-bold text-black">INNOVATUION</span>
            </div> 
            </>
            </FadeInElement>
        </div>

        <div className=" flex flex-row items-center gap-5">

            <div className="transition-transform duration-300 ease-in-out duration-300 transform hover:scale-110 animate-bounce transform hover:scale-125 w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center " onMouseEnter={()=> setShow4(true)}>
            <img src="/core4.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0  flex flex-col text-left text-[20px] text-black`}>
                WE BUILD TRUST THROUGH
                <span className="font-bold  text-black">TRANSPARENCY</span>
            </div>
            </>
            </FadeInElement>
        </div>
        </div>
        </div>
        <div className="text-black mt-20 flex flex-row justify-center">
            <div className=" flex flex-row items-center gap-5">

            <div className="transition-transform duration-300 ease-in-out duration-300 transform hover:scale-110 animate-bounce transform hover:scale-125 w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center" onMouseEnter={()=> setShow4(true)}>
            <img src="/core5.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-white"></div>
            <FadeInElement>
                <>
            <div className={`w-[250px] text-white transition-opacity duration-500 opacity-100 transition-opacity duration-300 opacity-0  flex flex-col text-left text-black`}>
                WE BUILD TRUST THROUGH
                <span className="font-bold text-black">TRANSPARENCY</span>
            </div>
            </>
            </FadeInElement>


            
        </div>
        </div>
        </div>
    </div>
}