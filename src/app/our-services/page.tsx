import Footer from "@/components/footer/Footer";
import MyNavbar from "@/components/my-navbar/MyNavbar";

export default function OurServices() {

    const ourServices = [
        {
            img:'/image 1.png',
            name:'ASSET MANAGEMENT',
            description:'We substantivize maximization of our clients’ assets. Acquisition, operation and disposition of properties as well as implementing strategies to enhance return on investment is our chief goal. We optimize the value of real estate portfolio, work at minimizing risks, carry out financial analysis, assist lead administration, supervise tenant relations all for the sole purpose of bringing out a positive financial outcome for our clients.',
        },
        {
            img:'/image 2.png',
            name:'INVESTMENT CONSULTANCY',
            description:'Our team of seasoned connoisseurs analyze market trends, identify potential financial feasibility of an investment, evaluate potential risks and returns to align your investment vision and risk appetite. We help our clients with making informed decisions so as to maximize their investment returns in the real estate market. We empower clientele for them to make cost-effective decisions and ensure a smooth and hassle-free experience.',
        },
        {
            img:'/image 3.png',
            name:'MARKETING & SALES',
            description:'Here at Bin Sadiq, our team propagates the property driven opportunities showcasing them to a diverse audience. We carry through by generating leads, facilitate property viewings, negotiate deals, close sales or rental agreements, identify target demographics, and develop pricing strategies. We bring forth our marketing sales service in order to hike visibility, compel buyers and renters, and achieve successful sales transactions.',
        },
    ]
        return <div className="bg-lead-color">
            
                <div className="relative w-full h-[500px]  bg-lead-color  bg-cover" style={{backgroundImage:'url(/Slider_img_2_big.jpg)'}}>
                <MyNavbar/>
                </div>
                <div className="px-20 ">
                    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 place-items-center -translate-y-20">
                        {
                            ourServices.map((element,idx)=> {
                                return <div className="shadow-2xl w-[300px] h-[500px] text-black bg-golden rounded-xl   px-3  flex flex-col items-center">
                                    <div className="bg-black w-[100px] h-[100px] p-5 rounded-xl -translate-y-10">
                                    <img src={element.img} alt="" className="invert"/>
                                    </div>
                                    <div className="text-center text-[20px] w-[150px] font-bold">{element.name}</div>
                                    <div className="text-justify">{element.description}</div>
                                </div>
                            })
                        } 
                    </div>
                </div>          
            
            <Footer/>
        </div>
}
