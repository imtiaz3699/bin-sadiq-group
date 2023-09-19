"use client"
import Navbar from "@/components/Navbar/Navbar";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/my-navbar/MyNavbar";

export default function CSR () {
    return <>
    <div  className="bg-[url('/csr-bg-img-2.png')] md:bg-[url('/csr-bg-image.jpg')] relative w-full h-[500px] bg-cover md:h-[700px] ">
    <MyNavbar/>
    <div className="md:hidden left-0 right-0 absolute top-[40%] text-center text-white text-[40px]">FROM AWARENESS
    
    <br /> TO ACTION</div>
    </div>
    <div className="w-full flex justify-center px-3">
        <div className="py-[50px] md:py-[150px] px-3 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">


        <div className="w-auto h-auto  md:w-[550px] md:h-[350px] rounded-xl drop-shadow-xl shadow-xl shadow-slate-800">
        <img src="/flood.jpg" alt="" className="w-full h-full rounded-xl"/>
        </div>


        <div className="flex flex-col w-auto md:w-[500px] gap-5">
        <h1 className="font-semibold text-[30px]">FLOOD DRIVE</h1>
        <p className="text-[20px]">Flooding across Pakistan since June 2022 has effected at least 33 million people. Government declaredd a national emergency as the floods killed more than 12,00 people and destroyed homes,crops, and livestock.</p>
        <button className="px-2 py-1 bg-blue1 w-[150px] rounded-2xl text-white">Read More</button>
        </div>


        </div>


    </div>

    
    <div className="w-full flex justify-center bg-blue1 px-3">
        <div className="py-[50px] md:py-[150px] px-3 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 ">
        
        <div className="flex flex-col w-auto md:w-[500px] gap-5">
        <h1 className="font-semibold text-[30px] text-white">RAMZAN RATION DRIVE</h1>
        <p className="text-[20px] text-white">Flooding across Pakistan since June 2022 has effected at least 33 million people. Government declaredd a national emergency as the floods killed more than 12,00 people and destroyed homes,crops, and livestock.</p>
        <button className="px-2 py-1 bg-black w-[150px]  rounded-2xl text-white">Read More</button>
        </div>


        <div className="w-auto h-auto  md:w-[550px] md:h-[350px] rounded-xl drop-shadow-xl shadow-xl shadow-slate-800">
        <img src="/ramadan.png" alt="" className="w-full h-full rounded-xl"/>
        </div>


        </div>
        

    </div>
    <Footer/>
    </>
}