"use client"
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import MyNavbar from "../my-navbar/MyNavbar";

export default function BinSadiqLawAssociates () {
    return <>
    <div style = {{backgroundImage:'url(law.jpg)'}} className="relative w-full h-[814px] bg-cover">
    {/* <SecondNavbar/> */}
    <MyNavbar/>
    <div className="text-white w-full h-full flex flex-col items-center justify-center">
    <div className="text-white flex flex-col items-center ">
    <h1 className="flex flex-row items-center text-[50px]">EXPERIENCE <div className="w-10 h-10"><img src="/dot.png" alt="" className="w-full h-full"/></div> CREATIVITY <div className="w-10 h-10"><img src="/dot.png" alt="" className="w-full h-full"/></div> RESULTS</h1>
    <p className="text-[30px] font-semi-bold font-goudy">Getting the best representation is only one Call away</p>
    <button className="px-4 py-4 w-[250px] bg-[#D1AA67] rounded-md text-[25px] mt-5">Contact Us Today</button>
    </div>
    </div>
    </div>

    <div className="py-[200px] px-10 flex flex-col pl-[200px] bg-[#2B292A] justify-center">
        <h1 className=" text-[50px] text-white">Ch Sajjad Ali</h1>
        <p className="mt-[133px]">Chaudhy Sajjad Ali is the most professional, logical,and Argumentative Advocate of High Court having 20 years of experience.</p>
        <div className="bg-[#FFFFFF] w-[438px] h-[74px] rounded-[43px]">
            <button className="bg-[#D1AA67] w-[137px] h-[62px]  rounded-[43px]">Lawyer Profile</button>
        </div>
        
    </div>
    
    </>
}