'use client'

import SecondNavbar from "@/components/SecondNavbar/SecondNavbar"
import MyNavbar from "../../components/my-navbar/MyNavbar"

export default function UsamaSadiq(){
    return <>
    <div className="w-full h-[825px] bg-cover" style = {{backgroundImage:'url("https://res.cloudinary.com/ddx3egvut/image/upload/v1694517842/usama-sadiq_jmsdss.png")'}}>
    {/* <SecondNavbar/> */}
    <MyNavbar/>

    </div>
    <div className="w-full py-10 bg-lead-color flex flex-col items-center justify-center">
<h1 className="text-[30px]">MUHAMMAD USAMA SADIQ</h1>
    </div>
    <div className="flex py-20 flex-col items-center">
        <h1>Follow Usama Sadiq On Social Media Platforms</h1>
        <div className="flex flex-row items-center justify-center">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </div>

    </>
}