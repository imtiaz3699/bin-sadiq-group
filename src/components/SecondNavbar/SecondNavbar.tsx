
'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SecondNavbar () {

    const [dropDown,setDropDown] = useState(false);
    const [state,setState] = useState<number|null>(null);
    const [urlName,setUrlName] = useState('');
    const data = [
        {
            name:'HOME',
            url:'/', 
        },
        {
            name:'ABOUT US',
            url:'/aboutus', 
        },
        {
            name:'PROJECTS',
            url:'', 
            linked:[
                {name:'The Heritage',
            url:'/heritage',}
            ]
        },
        {
            name:'/BinSadiqLogo.png',
            img:'/bin-sadiq-logo.png',
            url:'/', 
        },
        {
            name:'CSR',
            url:'',
            linked:[
                {
                    name:'Bin Sadiq Foundation',
                    url:'/csr',
                },
                {
                    name:'Bin Sadiq Law Associates',
                    url:'bin-sadiq-law-associates',
                }
            ], 
            
        },
        {
            name:'PEOPLE',
            url:'', 
            linked:[
                {
                    name:'Usama Sadiq',
                    url:'/usama-sadiq',
                },
                {
                    name:'Our Team',
                    url:'/our-team',
                }
            ],
        },
        {
            name:'CONTACT',
            url:'', 
        },
    ]
    const pathname = usePathname();
    // const isRouteActive = (route:string) => {
    //     return router.pathname === route;
    //   };
    const dropDowns = (index:number) => {
        if(index === 2) {
            setState(2)
        }

        if(index === 4){
            setState(4)
        }
        if(index === 5){
            setState(5)
        }        
    }
    return <div className="flex flex-row items-center text-white justify-center gap-20 w-full absolute py-6 px-10 z-10">
            {
                data.map((element,idx)=> {
                    return <div className="" key = {idx}>
                    { element?.img ? 
                    <img src={element.img} alt="" className="w-[100px] h-[100px]"/>
                    :
                    <Link href={element?.url}> 
                    <div className={`${pathname === element?.url ? "text-[18px]  border-[1px] border-golden px-2 py-1 rounded-xl relative font-semi-bold text-golden cursor-pointer  flex flex-row items-center gap-2" : "text-[18px] relative font-semi-bold cursor-pointer  flex flex-row items-center gap-2"}}`} onMouseEnter={()=> dropDowns(idx)} onMouseLeave={()=> setState(null)}>
                       <span className="hover:text-golden">{element?.name}</span>  
                    <div className="flex flex-col items-center absolute w-[300px] top-[27px] pt-3 left-[-100px]">
                    {
                       state === idx  && element?.linked && element?.linked.map((item,index)=> {                       
                            return <>
                            <Link href={item?.url} key = {index}>
                            <div className={`${pathname === item.url ? "text-golden" : ""} hover:text-golden text-[16px]`}>{item?.name}</div>
                            </Link>
                            </>
                        }) 
                    }
                    </div>
                    </div></Link> } 
                    </div>
                })
            }
    </div>
}