import Navbar from '@/components/Navbar/Navbar';
import MyNavbar from '@/components/my-navbar/MyNavbar';
import Link from 'next/link';
import React from 'react'
function OurTeam () {

    return <div className='bg-black'>
        <MyNavbar/>
        <div className='bg-black w-full h-screen overflow-auto py-3'>
                    <div className='grid place-items-center gap-5 text-white  '>
                        <h1 className='text-[25px] text-center md:text-[64px] font-bold mt-48 bg-black'>Meet The Team</h1>
                        <p className='text-[16px] text-center md:text-[30px] '>Meet our Team of Professionals to serve you</p>
                            <div className='flex flex-row gap-5'>
                                <Link href='/aboutus'>
                        <button className='px-3 py-1 bg-golden rounded-[4px] text-[20px]'>About Us</button>
                        </Link>
                        <Link href = '/contact_us'>
                            <button className='px-3 py-1 bg-golden rounded-[4px] text-[20px]'>Contact</button>
                            </Link>
                            </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-5 text-black'>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Zeeshan</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Farhan</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Shakeel</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white text-black flex flex-row items-center justify-center'>Rohma</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Shahrayar</div>
                            </div>
                            
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Danish</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Zeeshan</div>
                            </div>
                            <div className='flex flex-col items-center justify-between border-[1px] border-golden  rounded-[5px] w-[250px] h-[300px]'>
                                <div></div>
                                <div className='w-full h-[70px] bg-white flex flex-row items-center justify-center'>Zeeshan</div>
                            </div>
                            
                            
                        </div>
                        </div>            
        </div>
    </div>
} 
export default OurTeam;