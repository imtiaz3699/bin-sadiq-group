'use client'
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Image from "next/image";
import ProjectSpecification from "./ProjectSpecification";
import Footer from "../footer/page";

export default function Heritage () {
    return <div className="bg-grean">
    <div style = {{backgroundImage:'url(/Main_Page.jpg)'}} className="h-[700px] ">
    <SecondNavbar/>
    </div>
    <div style = {{backgroundImage:'url(/edit.jpg)'}} className=" h-[700px] w-full bg-cover bg-no-repeat">
        <div className="w-[50%] h-full  py-20 float-right flex flex-col justify-center pl-20 bg-grean opacity-95 ">
            
           {/* <Image src = "/Heritage_logo.png" alt = "" width= {300} height = {300}/> */}
           <img src="/Heritage_logo.png" alt="" className="w-[300px] h-[100px]"/>
           
           <h1 className="font-bold text-[32px] font-normal leading-[38.41px] text-golden mt-28">OVERVIEW</h1>
            <div className="w-[500px] text-white mt-5">The heritage is a six-story hybrid building inspired by esthetical renaissance spanish architecture with modern living by bin sadiq group spacious shops,executive offices, and luxury serviced apartments. Investing in heritage is a low risk and high return oppotunity with both high capital appreciation and guaranteed rental income due to its prime location at bahria paradise, high quality construction, smart Homes and office technology, zero load shedding,access to luxury living facilities and proximity to Public transport.</div>
        </div>
    </div>
<ProjectSpecification/>
<Footer/>

    </div>
}