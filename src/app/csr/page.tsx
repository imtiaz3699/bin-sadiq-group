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


        <div className="flex flex-col w-auto md:max-w-[800px] gap-5">
        <h1 className="font-semibold text-[30px]">FLOOD DRIVE</h1>
        <p className="text-[20px] text-justify">The latter is a humanitarian crisis of immense proportion that required an urgent
and coordinated response. Bin Sadiq under the umbrella of Helping Hand for Relief and
Development’s Flood Relief Campaign, voyaged on a mission to help construct lost homes for
the affected, partaking in recuperation projects for needy families. Another venture included
funding the seeds of hope package for providing to farming families so that they are able to
sustain with an estimated income of one year. Furthermore, our employees donated one day
salary for the noble cause. The material and financial support constituted food packages,
clothes bundles, principal medicines, home necessities, and rehabilitation substance for
schools. Afflicted families situated in KPK and Southern Punjab, struggling to rebuild their lives
were facilitated-areas including Kalam, Swat and Taunsa Sharif, Punjab.</p>
        {/* <button className="px-2 py-1 bg-blue1 w-[150px] rounded-2xl text-white">Read More</button> */}
        </div>


        </div>


    </div>

    
    <div className="w-full flex justify-center bg-blue1 px-3">
        <div className="py-[50px] md:py-[150px] px-3 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 ">
        
        <div className="flex flex-col w-auto md:max-w-[800px] gap-5">
        <h1 className="font-semibold text-[30px] text-white">RAMZAN RATION DRIVE</h1>
        <p className="text-[20px] text-white text-justify">This year, appertaining soaring inflation and reduced buying power mean, even
more people are at risk of hunger and disease. At Bin Sadiq, we aim through our mindful series
of measures to reach out laborers who regularly call it a day going to bed famished, having to
struggle accessing food during fasting and prayer each year. Our Ramadan Ration Drive serves
as a reminder to the community that everyone deserves to celebrate the spirit of this month
equally. We lend gift of kindness accomplishing three phases. The first phase revolves around
spreading the word via social media campaigning, record keeping and designing. The
intermediate phase involves the development of ration packages and their followed
distribution. For the last phase, we segment stories of the underprivileged for social change so
as to empower them on online forums. The ration hampers coupled with Iftar items,
incorporate all the vital grocery products for household consumption too, validating well-earned
virtues of the Holy Month.</p>
        {/* <button className="px-2 py-1 bg-black w-[150px]  rounded-2xl text-white">Read More</button> */}
        </div>
        <div className="w-auto h-auto  md:w-[550px] md:h-[350px] rounded-xl drop-shadow-xl shadow-xl shadow-slate-800">
        <img src="/ramadan.png" alt="" className="w-auto h-auto  md:w-[550px] md:h-[350px] rounded-xl"/>
        </div>


        </div>
        

    </div>
    <Footer/>
    </>
}