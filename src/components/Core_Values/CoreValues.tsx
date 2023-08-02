import React from "react"
export default  function CoreValues () {
    const [show,setShow] = React.useState(false);
    const [show2,setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);

    return <div className="container mx-auto text-center py-20 ">
        <div className="text-[64px] text-golden font-bold">OUR CORE VALUES</div>

        <div className="flex flex-col items-center gap-20">
        <div className="flex flex-row items-center justify-center gap-[150px]">

        <div className=" flex flex-row items-center gap-5">

            <div className="w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center shadow-2xl" onMouseEnter={()=> setShow(true)}>
            <img src="/icon1.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-black"></div>
           
            <div className={`${show ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-300 opacity-0'} flex flex-col text-left text-black`}>
            WE ACT WITH
            <span className="font-bold">INTEGRITY</span>
            </div> 
            
        </div>

        <div className=" flex flex-row items-center gap-5">

            <div className="w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center shadow-2xl" onMouseEnter={()=> setShow2(true)}>
            <img src="/icon2.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-black"></div>
            <div className={`${show2 ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-300 opacity-0'} flex flex-col text-left text-black`}>
                WE BELIEVE IN
                <span className="font-bold">MUTUAL RESPECT</span>
            </div>
        </div>
        </div>



        <div className="flex flex-row items-center justify-center gap-[150px]">
        <div className=" flex flex-row items-center gap-5">

            <div className="w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center shadow-2xl" onMouseEnter={()=> setShow3(true)}>
            <img src="/icon3.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-black"></div>
           
            <div className={`${show3 ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-300 opacity-0'} flex flex-col text-left text-black`}>
            WE ARE DEVOTED
            <span className="font-bold">INNOVATUION</span>
            </div> 
            
        </div>

        <div className=" flex flex-row items-center gap-5">

            <div className="w-[100px] h-[100px] p-3 rounded-full flex flex-row items-center justify-center shadow-2xl" onMouseEnter={()=> setShow4(true)}>
            <img src="/icon4.png" alt="" className="w-[100px]"/>
            </div>
            
            <div className="w-[3px] h-[100px] bg-black"></div>
            <div className={`${show4 ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-300 opacity-0'} flex flex-col text-left text-black`}>
                CUSTOMER SATISFACTION
                <span className="font-bold">IS OUR FIRST PRIORITY</span>
            </div>
        </div>
        </div>
        </div>
    </div>
}