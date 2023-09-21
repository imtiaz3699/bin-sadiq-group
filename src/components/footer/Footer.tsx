"use client"
// import Image from "next/image"
import Link from "next/link"
export default function Footer () {
    const socialMediaIcons = [
        {
            img:'/tlogo.png',
            url:'https://twitter.com/BinSadiqGroup',
        },
        {
            img:'/ilogo.png',
            url:'https://www.instagram.com/binsadiqgroup',
        },
        {
            img:'/flogo.png',
            url:'https://www.facebook.com/BinSadiqGroup',
        },
        {
            img:'/llogo.png',
            url:'https://www.linkedin.com/company/77645619/admin/feed/posts',
        },
    ]
    return <>
    {/* <div className=''>
                <img src="/Landmarks.jpg" alt="" className='object-cover w-full h-full'/>
            </div> */}
    {/* <div className="bg-lead-color py-[20px] flex flex-col sm:flex-row text-white items-center justify-between px-20">
        
            <div className="flex flex-col items-center ">
                <div className="hidden md:flex w-[150px] h-[150px]">
            
                <img src="/logo.png" alt="" className="w-full h-full"/>


                </div>
                <div className="text-[12px] md:text-[20px] font-bold">CAREERS</div>
                <div className="text-[12px] md:text-[20px] font-bold">CONTACT US</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="flex flex-row items-center gap-[20px] mt-[20px]">
            <Link href = "" target="_blank">
            
            <img src="" className="w-[19px] h-[19px] xl:w-[48px] xl:h-[48px]" alt="" />
            </Link>
            <Link href = "/" target="_blank">
            
            <img src="" alt="" className="w-[21px] h-[21px] xl:w-[48px] xl:h-[48px]"/>
            </Link>
            <Link href = "" target="_blank">
            
            <img src="" alt="" className="w-[11px] h-[21px] xl:w-[21px] xl:h-[48px]"/>
            </Link>
            <Link href = "/" target="_blank">
            
            <img src="" alt="" className="w-[21px] h-[21px] xl:w-[48px] xl:h-[48px]"/>
            </Link>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-[12px] md:text-[20px] font-normal">care@binsadiqgroup.com.pk</div>
                <div className="text-[12px] md:text-[20px] font-normal">0331-000-1111</div>
                </div>
        </div>

    </div> */}
    <div className="bg-lead-color">
    <div className="flex flex-col items-center md:items-start md:flex-row justify-between px-3 md:px-20 bg-lead-color py-20 text-white">
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
            <h1 className="text-[24px] font-bold leading-[27px]">Head Office Address</h1>
            <p className="text-[16px] font-normal mt-0 md:mt-[16px]">Office 15y, Business Bay, Bahria Phase 7,<br /> 
Bahria Expressway, Rawalpindi</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-[20px] md:mt-0">
            <h1 className="text-[24px] font-bold leading-[27px]">Contact Us</h1>
            <p className="text-[16px] font-normal mt-0 md:mt-[16px]"><strong> Email:</strong> care@binsadiqgroup.com.pk <br />
<strong>UAN:</strong> 0331 000 1111

</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-[20px] md:mt-0">
            <h1 className="text-[24px] font-bold leading-[27px]">Follow Us</h1>
            <p className="text-[16px] font-normal mt-0 md:mt-[16px]">Careers <br />
Privacy Policy <br />
Download</p>
        </div>
    </div>
    <div className="px-20 flex flex-row items-center justify-center gap-[46px] w-full bg-lead-color pb-20">
            <Link href = "https://twitter.com/BinSadiqGroup" target="_blank">
            <img src="/tlogo.png" alt="" className="w-[16px] h-[16px] "/>
            </Link>
            <Link href = "https://www.instagram.com/binsadiqgroup" target="_blank">
            <img src="/ilogo.png" alt="" className="w-[18px] h-[18px] "/>
            </Link>
            <Link href = "https://www.facebook.com/BinSadiqGroup" target="_blank">
            <img src="/flogo.png" alt="" className="w-[10px] h-[19px] "/>
            </Link>
            <Link href = "https://www.linkedin.com/company/77645619/admin/feed/posts" target="_blank">
            <img src="/llogo.png" alt="" className="w-[18px] h-[18px] "/>
            </Link>
    </div>
    </div>

    
    <div className="w-full bg-golden text-white text-center h-[86px] flex justify-center items-center text-[18px] sm:text-[24px]">2023 All Rights Reserved By Bin Sadiq Group </div>
</>
}