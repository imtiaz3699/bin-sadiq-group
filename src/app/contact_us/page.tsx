import Footer from "@/components/footer/Footer"
import MyNavbar from "@/components/my-navbar/MyNavbar"
import React from "react"
export default function ContactUs () {
    const contactUs = [
        {
            img:'/location.png',
            name:'Our Home Office',
            address:'Bin Sadiq Group F-8',
        },{
            img:'/phone-call.png',
            name:'Phone Number',
            address:'0331 000 1111',
        },
        {
            img:'/email.png',
            name:'Email',
            address:'care@binsadiqgroup.com.pk',
        },

    ]
    return <>
    <div className="relative w-full h-[500px] md:h-[700px] bg-lead-color">
    <MyNavbar/>
    <div className="absolute  top-[40%]  left-0 right-0 text-golden  text-center text-[40px] sm:text-[40px] md:text-[100px] font-bold leading-[56px] transition-transform duration-300 transform">Contact Us</div>
    </div>

        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 place-items-center -translate-y-20 px-3 md:px-20">
               {
                contactUs.map((element,idx)=> {
                    return <div className="w-[340px] rounded-xl bg-golden flex flex-col items-center gap-2 py-10">
                        <img src={element.img} alt="" className="w-[50px] h-[50px]"/>
                        <div className="text-[20px] font-bold">{element.name}</div>
                        <div>{element.address}</div>

                    </div> 
                })
               } 
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center mt-20 md:mt-28 mb-20 px-20 gap-28">
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row items-center gap-10">
                        <div className="flex flex-col ">
                        <label htmlFor="" className="text-[20px] font-bold">Email</label>
                        <input type="text" placeholder=""
         className="border-b-2  border-golden  outline-none w-[300px] sm:w-[200px]" />
                        </div>
                        <div className="flex flex-col">
                    <label htmlFor="" className="text-[20px] font-bold">Name</label>
                    <input type="text" className="border-b-2 w-[300px] sm:w-[200px]  border-golden  outline-none w-[200px]"/>
                    </div>

                    </div>
                    <div className="flex flex-col gap-">
                    <label htmlFor="" className="text-[20px] font-bold">Message</label>
                    <input type="text" className="border-b-2  border-golden  outline-none"/>
                    </div>
                </div>
                <button className="font-bold w-[200px] sm:w-[350px] h-[54px] rounded-xl bg-golden">Submit</button>
            </div>
            
            <div className="w-[300px] h-[200px] md:w-[500px] md:h-[400px] rounded-xl">
            
            <iframe className="w-full h-full rounded-xl"  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bin Sadiq Group&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            
        </div>
    <Footer/>
</>
}