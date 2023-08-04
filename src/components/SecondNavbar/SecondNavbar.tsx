import Link from "next/link"

export default function SecondNavbar () {
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
        },
        {
            name:'/BinSadiqLogo.png',
            url:'', 
        },
        {
            name:'CSR',
            url:'', 
        },
        {
            name:'PEOPLE',
            url:'', 
        },
        {
            name:'CONTACT',
            url:'', 
        },
    ]
    return <div className="flex flex-row items-center text-white justify-center gap-20 w-full absolute py-6 px-10 z-10">
            {
                data.map((element,idx)=> {
                    return <div className="">
                    { idx === 3 ? <img src={element.name} alt="" className="w-[100px] h-[100px]"/> : <Link href={element.url}> <div className="text-[18px] font-semi-bold cursor-pointer hover:text-golden">{element.name}</div></Link> } 
                    </div>
                })
            }
    </div>
}