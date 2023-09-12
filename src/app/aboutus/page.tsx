"use client"
import Navbar from "@/components/Navbar/Navbar";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Footer from "../../components/footer/Footer";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";
import MyNavbar from "../../components/my-navbar/MyNavbar";
import { lato } from "../layout";

export default function AboutUs  () {
    
return<> <div className="w-full h-[100vh] bg-no-repeat relative bg-cover" style= {{backgroundImage:'url(/aboutus1.jpg)'}}>
{/* <SecondNavbar/> */}
<MyNavbar/>
<div >
<div className="text-white top-[35%] left-[20%] text-[35px] absolute">CREATING SPACES</div>
{/* <div className="italic">That Inspires</div> */}
<div className=""><img src="/That_Inspires.png" alt="" /></div>

</div>
</div>
<div className="flex flex-row items-center justify-center ">
<div  className="px-3 sm:px-5 xl:px-36 bg-white w-full py-5 sm:py-10 xl:py-20 text-black flex flex-row items-center  justify-center  "  
>

<TypingAnimation  className={`text-center text-[18px] md:text-[30px] ${lato.className} `} text = 'Bin Sadiq  is a living legacy in the real estate industry, with a track record of success spanning over several years in residential projects. We pride ourselves on our Professionalism, Integrity, and Commitment to our clients. Our team of experts has extensive knowledge and experience in all aspects of the Real Estate Buisness, from property valuation and marketing to construction and renovation. We are dedicated to providing personalized and efficient service, and we strive to build long-lasting relationships with our clients.' />

</div>
</div>


<div className="flex flex-col md:flex-row items-centr">
<div>
    <img src="/aboutus2.jpg" alt="" className="w-full h-full"/>
</div>
<div><img src="/aboutus4.jpg" alt="" className="w-full h-full"/></div>
</div>

<div className="bg-white text-black py-5 sm:py-10 xl:py-20 flex flex-col gap-10 items-center justify-center">
<h1 className="text-black font-bold text-center md:text-left text-[30px] sm:text-[40px] md:text-[64px] font-bold  leading-[56px]">Mission</h1>
<div className="bg-golden w-[300px] sm:w-[400px] h-[5px]"></div>
<p className={` text-center text-[18px] md:text-[30px] ${lato.className}`}>Our Mission is to develop high quality commercial & residential projects which offer a Classical Vintage and unique lifestyle in Modern Era, and create outstanding value for our clients.</p>
</div>

<div className="flex flex-col sm:flex-row ">
    <div className="w-full sm:w-[50%]">
        <img src="/aboutus3.jpg" alt="" className="bg-cover w-full h-full"/>
    </div>
    <div className="w-full sm:w-[50%]">
        <img src="/aboutus5.jpg" alt="" className="bg-cover w-full h-full"/>
    </div>
</div>


<div className="py-5 sm:py-10 xl:py-20 px-3 bg-white text-black flex flex-col gap-10 items-center justify-center bg-lead-color">
<h1 className="text-black font-bold text-center md:text-left text-[30px] sm:text-[40px] md:text-[64px]  font-bold  leading-[56px]">Vision</h1>
<div className="bg-golden w-[300px] sm:w-[400px] h-[5px]"></div>
<p className={`text-center text-[18px] md:text-[30px] ${lato.className}`}>Our Vision is to recreate the Heritage culture with Modern living in Reali Estate sector of Pakistan, which favors the development of sustainable, modern projects tailored to benefit society</p>
</div>
    
    <div>
        <Footer/>
    </div>
</>
}