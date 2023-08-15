"use client"
export default function Footer () {
    
    return <>
    {/* <div className=''>
                <img src="/Landmarks.jpg" alt="" className='object-cover w-full h-full'/>
            </div> */}
    <div className="bg-lead-color py-[80px] flex flex-row text-white items-center justify-between px-20">
        
            <div className="flex flex-col items-center ">
                <div className="w-[200px] h-[200px]">
                <img src="/logo.png" alt="" className="w-full h-full bg-cover"/>
                </div>
                
                <div className="text-[20px]">CAREERS</div>
                <div className="text-[20px]">CONTACT US</div>
            </div>
        
            <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center">
            <img src="/tlogo.png" alt="" className="w-[100px] h-[100px]"/>
            <img src="/ilogo.png" alt="" className="w-[100px] h-[100px]"/>
            <img src="/flogo.png" alt="" className="w-[100px] h-[100px]"/>
            <img src="/ilogo.png" alt="" className="w-[100px] h-[100px]"/>
            </div>
                <div className="text-[20px]">care@binsadiqgroup.com.pk</div>
                <div className="text-[20px]">0331-000-1111</div>
        </div>
    </div>
    </>
}