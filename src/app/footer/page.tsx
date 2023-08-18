"use client"
import Image from "next/image"
import Link from "next/link"
export default function Footer () {
    
    return <>
    {/* <div className=''>
                <img src="/Landmarks.jpg" alt="" className='object-cover w-full h-full'/>
            </div> */}
    <div className="bg-lead-color py-[20px] flex flex-row text-white items-center justify-between px-20">
        
            <div className="flex flex-col items-center ">
                <div className="w-[200px] h-[200px] relative">
                <Image alt = "" src = "/logo.png" objectFit="cover" layout="fill"/>
                </div>
                <div className="text-[20px]">CAREERS</div>
                <div className="text-[20px]">CONTACT US</div>
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center">
            <Link href = "https://twitter.com/BinSadiqGroup" target="_blank">
            <Image alt = "Twitter" src = "/tlogo.png" width = {100} height = {100}/>
            </Link>
            <Link href = "https://www.instagram.com/binsadiqgroup/" target="_blank">
            <Image alt = "Instagram" src = "/ilogo.png" width = {100} height = {100}/>
            </Link>
            <Link href = "https://www.facebook.com/BinSadiqGroup" target="_blank">
            <Image alt = "Facebook" src = "/flogo.png" width = {100} height = {100}/>
            </Link>
            <Link href = "https://www.linkedin.com/company/77645619/admin/feed/posts/" target="_blank">
            <Image alt = "Linked" src = "/llogo.png" width = {100} height = {100}/>
            </Link>
            </div>
                <div className="text-[20px]">care@binsadiqgroup.com.pk</div>
                <div className="text-[20px]">0331-000-1111</div>
        </div>

    </div>
    <div className="w-full bg-golden text-white text-center h-[86px] flex justify-center items-center text-[24px]">2023 All Rights Reserved By Bin Sadiq Group </div>
    </>
}