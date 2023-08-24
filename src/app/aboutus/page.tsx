"use client"
import Navbar from "@/components/Navbar/Navbar";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Footer from "../footer/page";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";


export default function AboutUs  () {
    
return<> <div className="w-full h-[100vh] bg-no-repeat relative bg-cover" style= {{backgroundImage:'url(/aboutus1.jpg)'}}>
<SecondNavbar/>
<div >
<div className="text-white top-[35%] left-[20%] text-[35px] absolute">CREATING SPACES</div>
{/* <div className="italic">That Inspires</div> */}
<div className=""><img src="/That_Inspires.png" alt="" /></div>

</div>



</div>
<div className="flex flex-row items-center justify-center ">
<div  className="px-36 bg-white w-full py-20 text-black flex flex-row items-center  justify-center text-[28px] bg-lead-color"  
>

<TypingAnimation text = 'Bin Sadiq  is a living legacy in the real estate industry, with a track record of success spanning over several years in residential projects. We pride ourselves on our Professionalism, Integrity, and Commitment to our clients. Our team of experts has extensive knowledge and experience in all aspects of the Real Estate Buisness, from property valuation and marketing to construction and renovation. We are dedicated to providing personalized and efficient service, and we strive to build long-lasting relationships with our clients.' className="text-center font-thin text-[30px]"/>

</div>
</div>


<div className="flex flex-row items-centr">
<div>
    <img src="/aboutus2.jpg" alt="" className="w-full h-full"/>
</div>
<div><img src="/aboutus4.jpg" alt="" className="w-full h-full"/></div>
</div>

<div className="bg-white text-black py-20 flex flex-col gap-10 items-center justify-center">
<h1 className="text-[64px] font-bold">Mission</h1>
<div className="bg-golden w-[400px] h-[5px]"></div>
<p className="w-[1000px] text-center text-[22px] ">Our Mission is to develop high quality commercial & residential projects which offer a Classical Vintage and unique lifestyle in Modern Era, and create outstanding value for our clients.</p>
</div>

<div className="flex flex-row ">
    <div className="w-[50%]">
        <img src="/aboutus3.jpg" alt="" className="bg-cover w-full h-full"/>
    </div>
    <div className="w-[50%]">
        <img src="/aboutus5.jpg" alt="" className="bg-cover w-full h-full"/>
    </div>
</div>
<div className="py-20 bg-white text-black flex flex-col gap-10 items-center justify-center  bg-lead-color">
<h1 className="text-[35px] font-bold text-[64px]">Vision</h1>
<div className="bg-golden w-[400px] h-[5px]"></div>
<p className="w-[1000px] text-center text-[25px]">Our Vision is to recreate the Heritage culture with Modern living in Reali Estate sector of Pakistan, which favors the development of sustainable, modern projects tailored to benefit society</p>
</div>

    <div>
        <Footer/>
    </div>

</>
}