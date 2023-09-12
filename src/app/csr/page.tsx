"use client"
import Navbar from "@/components/Navbar/Navbar";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Footer from "../footer/Footer";
import MyNavbar from "../my-navbar/MyNavbar";

export default function CSR () {
    return <>
    <div style = {{backgroundImage:'url(csr-bg-image.jpg)'}} className="w-full h-[814px] bg-cover">
    {/* <SecondNavbar/> */}
    <MyNavbar/>
    </div>
    <div className="w-full flex justify-center">
        <div className="py-[150px] px-20 flex flex-row items-center justify-center gap-10 w-[1500px]">
        <div className="w-[595px] h-[457px] rounded-xl drop-shadow-xl shadow-xl shadow-slate-800">
        <img src="/flood.jpg" alt="" className="w-full h-full bg-contained rounded-xl"/>
        </div>
        <div className="flex flex-col w-[500px] gap-5">
        <h1 className="font-semibold text-[30px]">FLOOD DRIVE</h1>
        <p className="text-[20px]">Flooding across Pakistan since June 2022 has effected at least 33 million people. Government declaredd a national emergency as the floods killed more than 12,00 people and destroyed homes,crops, and livestock.</p>
        <button className="px-2 py-1 bg-blue1 w-[150px] rounded-2xl text-white">Read More</button>
        </div>
        </div>


    </div>

    
    <div className="w-full flex justify-center bg-blue1">
        <div className="py-[150px] px-20 flex flex-row items-center justify-center gap-10 w-[1500px]">
        
        <div className="flex flex-col w-[500px] gap-5">
        <h1 className="font-semibold text-[30px] text-white">RAMZAN RATION DRIVE</h1>
        <p className="text-[20px] text-white">Flooding across Pakistan since June 2022 has effected at least 33 million people. Government declaredd a national emergency as the floods killed more than 12,00 people and destroyed homes,crops, and livestock.</p>
        <button className="px-2 py-1 bg-black w-[150px]  rounded-2xl text-white">Read More</button>
        </div>
        <div className="w-[600px] h-[400px] rounded-xl drop-shadow-xl shadow-xl shadow-black">
        <img src="/ramadan.png" alt="" className="w-full h-full bg-cover rounded-xl"/>
        </div>
        </div>
        

    </div>
    <Footer/>
    </>
}