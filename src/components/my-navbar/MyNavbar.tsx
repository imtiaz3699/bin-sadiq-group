
'use client'
import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import myImage from '../../../public/bin-sadiq-logo.png'
import { marriware } from '@/app/layout';
const MyNavbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false);
    const [state, setState] = useState<number | null>(null);
    const [secondState, setSecondState] = useState<number | null>(null);
    const [urlName, setUrlName] = useState('');
    const data = [
        {
            name: 'HOME',
            url: '/',
        },
        {
            name: 'ABOUT US',
            url: '/aboutus',
        },
        {
            name: 'PROJECTS',
            url: '',
            linked: [
                {
                    name: 'The Heritage',
                    url: '/heritage',
                }
            ]
        },
        {
            img: '/bin-sadiq-logo.png',
            url: '/',
        },
        {
            name: 'CSR',
            url: '',
            linked: [
                {
                    name: 'Bin Sadiq Foundation',
                    url: '/csr',
                },
                {
                    name: 'Bin Sadiq Law Associates',
                    url: 'bin-sadiq-law-associates',
                }
            ],

        },
        {
            name: 'PEOPLE',
            url: '',
            linked: [
                {
                    name: 'Usama Sadiq',
                    url: '/usama-sadiq',
                },
                {
                    name: 'Our Team',
                    url: '/our-team',
                }
            ],
        },
        {
            name: 'CONTACT US',
            url: '/contact_us',
        },

    ]
    const data2 = [
        {
            name: 'HOME',
            url: '/',
        },
        {
            name: 'ABOUT US',
            url: '/aboutus',
        },
        {
            name: 'PROJECTS',
            url: '',
            linked: [
                {
                    name: 'The Heritage',
                    url: '/heritage',
                }
            ]
        },
        {
            name: 'CSR',
            url: '',
            linked: [
                {
                    name: 'Bin Sadiq Foundation',
                    url: '/csr',
                },
                {
                    name: 'Bin Sadiq Law Associates',
                    url: 'bin-sadiq-law-associates',
                }
            ],

        },
        {
            name: 'PEOPLE',
            url: '',
            linked: [
                {
                    name: 'Usama Sadiq',
                    url: '/usama-sadiq',
                },
                {
                    name: 'Our Team',
                    url: '/our-team',
                }
            ],
        },
        {
            name: 'CONTACT US',
            url: '/contact_us',
        },

    ]
    const pathname = usePathname();

    const dropDowns = (index: number) => {
        if (index === 2) {
            setState(2)
        }
        if (index === 4) {
            setState(4)
        }
        if (index === 5) {
            setState(5)
        }
    }
    return <div className={`${marriware.className}`}>
        <div className={`xl:hidden ${isDropDown === true ? 'bg-lead-color' : 'bg-transparent'} flex flex-row justify-between  w-full absolute z-50 items-center `}>
            <Link href='/'>

                <div className="w-[100px] h[100px] py-5">

                    <img src="/LogoFinal.png" alt="" className="block xl:hidden w-full h-full" />
                </div>
            </Link>
            <div className="bg-transparent" onClick={() => { setIsDropDown(!isDropDown) }}>
                {
                    isDropDown ? <img src="/cross-.png" alt="" className="w-[20px] h-[17px]" />
                        :
                        <img src="/apps.png" alt="" className="w-[25px] h-[25px]" />
                }
            </div>
            {
                isDropDown && <div className="flex bg-lead-color flex-col items-left absolute left-0 top-0 z-50 mt-16 py-5 text-white w-full px-5">
                    {
                        data2.map((element, idx) => {
                            return <div className="flex flex-col">
                                <Link href={element.url}>
                                    <div onClick={() => secondState === idx ? setSecondState(null) : setSecondState(idx)} className="leading-[40px] flex flex-row items-center justify-between ">
                                        <div>{element.name}</div>
                                        {
                                            element?.linked && <div className={` ml-10  ${secondState === idx ? 'transform rotate-180 transition-transform' : ''} `}>
                                                <img src="/drop-down-second.png" alt="" className="w-full h-full" />
                                            </div>
                                        }
                                    </div>
                                </Link>
                                <div className="ml-5">
                                    {
                                        secondState === idx && element?.linked && element?.linked.map((item, index) => {
                                            return <>
                                                <Link href={item?.url} key={index}>
                                                    <div className={`${pathname === item.url ? "text-golden" : ""} hover:text-golden text-[16px]`}>{item?.name}</div>
                                                </Link>
                                            </>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            }
        </div>







        <div className="hidden xl:flex flex-row items-center text-white justify-center gap-20 w-full absolute py-6 px-10 z-10">
            {
                data.map((element, idx) => {
                    return <div className="" key={idx}>
                        {element?.img ?
                            <Link href={element.url}>
                                <img src={element.img} alt="" className="w-[100px] h-[100px]" />
                            </Link> 
                            :
                            <Link href={element?.url}>
                                <div className={`${pathname === element?.url ? "text-[18px] px-2 py-1 rounded-xl relative  text-golden cursor-pointer  flex flex-row items-center gap-2" : "text-[18px] relative font-semi-bold cursor-pointer  flex flex-row items-center gap-2"}}`} onMouseEnter={() => dropDowns(idx)} onMouseLeave={() => setState(null)}>
                                    <span className="hover:text-golden">{element?.name}</span>
                                    <div className="flex flex-col items-center absolute w-[300px] top-[27px] pt-3 left-[-100px]">
                                        {
                                            state === idx && element?.linked && element?.linked.map((item, index) => {
                                                return <>
                                                    <Link href={item?.url} key={index}>
                                                        <div className={`${pathname === item.url ? "text-golden" : ""} hover:text-golden text-[16px]`}>{item?.name}</div>
                                                    </Link>
                                                </>
                                            })
                                        }
                                    </div>
                                </div></Link>}
                    </div>
                })
            }
        </div>
    </div>
}

export default MyNavbar;