"use client"
import Navbar from "@/components/Navbar/Navbar";
import SecondNavbar from "@/components/SecondNavbar/SecondNavbar";
import Footer from "../../components/footer/Footer";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";
import MyNavbar from "../../components/my-navbar/MyNavbar";
import { lato,sweet,ananda } from "../layout";
import InViewElement from "@/components/InViewElement/InViewElement";

export default function AboutUs  () {
    
return<> <div className="w-full h-[480px] xl:h-[100vh] bg-no-repeat relative bg-cover  bg-[url('/mobile-1.png')] md:bg-[url('/aboutus1.jpg')]" >
                <MyNavbar/>
                <div className=" top-[30%] text-white left-[10%] absolute">
                <InViewElement targetId="element-20" inViewClassName="animate-fade-down animate-once animate-ease-linear " outOfViewClassName="element-out-of-view ">
                <div className="text-[12px] md:text-[50px]">CREATING SPACES</div>
                <div className={`text-[32px] md:text-[100px] text-golden ${ananda.className} `}>That Inspires</div>
                </InViewElement>
                </div>
          </div>



            <div  className="px-3 sm:px-5 xl:px-36 bg-white w-full py-5 sm:py-10 xl:py-20 text-black flex flex-col items-center gap-10 justify-center">
            
                <InViewElement targetId="element-21" inViewClassName="animate-fade-left animate-once animate-ease-out " outOfViewClassName="element-out-of-view ">
                <h1 className="text-black font-bold text-center text-[30px] sm:text-[40px] md:text-[64px]">About Us</h1>
                </InViewElement>
            
            <div className="bg-golden w-[300px] sm:w-[400px] h-[5px]"></div>
            <div className={`text-center text-[18px] md:text-[23px] ${lato.className}`}> <span className="text-golden font-bold"> Bin Sadiq</span>  is a living legacy in the real estate industry, with a track record of success spanning over several years in residential projects. We pride ourselves on our Professionalism, Integrity, and Commitment to our clients. Our team of experts has extensive knowledge and experience in all aspects of the  Real Estate Buisness, from property valuation and marketing to construction and renovation. We are dedicated to providing personalized and efficient service, and we strive to build long-lasting relationships with our clients.</div>
            </div>



            <div className="flex flex-col md:flex-row items-centr">
            <div className="w-[50%] h-[514px]">
            <img src="/aboutus2.jpg" alt="" className="w-full h-full bg-cover"/>
            </div>
            <div className="w-[50%] h-[514px] "><img src="/aboutus4.jpg" alt="" className="w-full h-full "/></div>
            </div>



            <div className="bg-white text-black py-5 sm:py-10 xl:py-20 flex flex-col gap-10 items-center justify-center">
            <InViewElement targetId="element-22" inViewClassName="animate-fade-right animate-once animate-ease-out " outOfViewClassName="element-out-of-view ">
                <h1 className="text-black font-bold text-center text-[30px] sm:text-[40px] md:text-[64px]">Mission</h1>
                </InViewElement>
            {/* <h1 className="text-black font-bold text-center md:text-left text-[30px] sm:text-[40px] md:text-[64px] font-bold  leading-[56px]">Mission</h1> */}
            <div className="bg-golden w-[300px] sm:w-[400px] h-[5px]"></div>
            <p className={`px-3 sm:px-5 xl:px-36 text-center text-[18px] md:text-[23px] ${lato.className}`}>Our Mission is to develop high quality commercial & residential projects which offer a Classical Vintage and unique lifestyle in Modern Era, and create outstanding value for our clients.</p>
            </div>



            <div className="flex flex-col sm:flex-row ">
            <div className="w-full sm:w-[50%]">
            <img src="/aboutus3.jpg" alt="" className="bg-cover w-full h-full"/>
            </div>
            <div className="w-full sm:w-[50%]">
            <img src="/aboutus5.jpg" alt="" className="bg-cover w-full h-full"/>
            </div>
            </div>


            <div className="py-5 sm:py-10 xl:py-20 bg-white text-black flex flex-col gap-10 items-center justify-center bg-lead-color">
            <InViewElement targetId="element-23" inViewClassName="animate-fade-up animate-once animate-ease-out" outOfViewClassName="element-out-of-view ">
                <h1 className="text-black font-bold text-center text-[30px] sm:text-[40px] md:text-[64px]">Vision</h1>
                </InViewElement>
            {/* <h1 className="text-black font-bold text-center md:text-left text-[30px] sm:text-[40px] md:text-[64px]  font-bold  leading-[56px]">Vision</h1> */}
            <div className="bg-golden w-[300px] sm:w-[400px] h-[5px]"></div>
            <p className={`px-3 sm:px-5 xl:px-36 text-center text-[18px] md:text-[23px] ${lato.className}`}>Our Vision is to recreate the Heritage culture with Modern living in Real Estate sector of Pakistan, which favors the development of sustainable, modern projects tailored to benefit society</p>
            </div>
    

            <div>
                <Footer/>
            </div>
</>
}