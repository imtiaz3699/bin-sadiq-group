"use client"
// import Image from "next/image"
import Link from "next/link"
export default function Footer () {
    
    return <>
    {/* <div className=''>
                <img src="/Landmarks.jpg" alt="" className='object-cover w-full h-full'/>
            </div> */}
    <div className="bg-lead-color py-[20px] flex flex-col sm:flex-row text-white items-center justify-between px-20">
        
            <div className="flex flex-col items-center ">
                <div className="hidden md:flex w-[150px] h-[150px]">
                {/* <Image alt = "" src = "/logo.png" objectFit="cover" layout="fill"/> */}
                <img src="/logo.png" alt="" className="w-full h-full"/>


                </div>
                <div className="text-[12px] md:text-[20px] font-bold">CAREERS</div>
                <div className="text-[12px] md:text-[20px] font-bold">CONTACT US</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="flex flex-row items-center gap-[20px] mt-[20px]">
            <Link href = "https://twitter.com/BinSadiqGroup" target="_blank">
            {/* <Image alt = "Twitter" src = "/tlogo.png" width = {50} height = {50} className="w-[50px] h-[50px] "/> */}
            <img src="/tlogo.png" className="w-[19px] h-[19px] xl:w-[48px] xl:h-[48px]" alt="" />
            </Link>
            <Link href = "https://www.instagram.com/binsadiqgroup/" target="_blank">
            {/* <Image alt = "Instagram" src = "/ilogo.png" width = {50} height = {50} className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"/> */}
            <img src="/ilogo.png" alt="" className="w-[21px] h-[21px] xl:w-[48px] xl:h-[48px]"/>
            </Link>
            <Link href = "https://www.facebook.com/BinSadiqGroup" target="_blank">
            {/* <Image alt = "Facebook" src = "/flogo.png" width = {50} height = {50} className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"/> */}
            <img src="/flogo.png" alt="" className="w-[11px] h-[21px] xl:w-[21px] xl:h-[48px]"/>
            </Link>
            <Link href = "https://www.linkedin.com/company/77645619/admin/feed/posts/" target="_blank">
            {/* <Image alt = "Linked" src = "/llogo.png" width = {50} height = {50} className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"/> */}
            <img src="/llogo.png" alt="" className="w-[21px] h-[21px] xl:w-[48px] xl:h-[48px]"/>
            </Link>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-[12px] md:text-[20px] font-normal">care@binsadiqgroup.com.pk</div>
                <div className="text-[12px] md:text-[20px] font-normal">0331-000-1111</div>
                </div>
        </div>

    </div>
    <div className="w-full bg-golden text-white text-center h-[86px] flex justify-center items-center text-[18px] sm:text-[24px]">2023 All Rights Reserved By Bin Sadiq Group </div>
</>
}