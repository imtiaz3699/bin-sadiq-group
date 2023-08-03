export default function SecondNavbar () {
    const data = [
        {
            name:'Home',
            url:'', 
        },
        {
            name:'About Us',
            url:'', 
        },
        {
            name:'Projects',
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
            name:'People',
            url:'', 
        },
        {
            name:'Contact',
            url:'', 
        },
    ]
    return <div className="flex flex-row items-center justify-center gap-20 text-white py-10">
            {
                data.map((element,idx)=> {
                    return <>
                    { idx === 3 ? <img src={element.name} alt="" className="w-[100px] h-[100px]"/> :<div className="cursor:pointer">{element.name}</div> } 
                    </>
                })
            }
    </div>
}