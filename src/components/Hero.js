import Image from "next/image";

//assets
import myImg from '../../public/myImg.png'
import { useEffect, useState } from "react";

export default function Hero(){
    
    const [username, setUsername] = useState('');
    const [userhandle, setUserHandle] = useState('');

    useEffect(()=>{
        var profileApi = "https://script.googleusercontent.com/macros/echo?user_content_key=L-cRoLazPX9qRdysHLrYn8IwgbpMyfbhXyDghdeS3kc7IMQ1bUp1QFj6auDXVbvt7ndm3ZaTC5tJbaZk1e198Ks_xFp8XwLbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO9ZvAAn3ShQPvR2X4OUHogvipHnByb1R-_uXhbNJJ_4gVMLAXB4rbJid3CweHm-DKvpORXU0681EXu3kQt1nxMfxxMg--JwxQ&lib=M8QvURP4d2RUdhnzqeWthMXBMBDukkyC4"
        fetch(profileApi)
        .then((response)=>response.json())
        .then((response)=>{
            setUsername(response.data[1]["developer-name"])
            setUserHandle(response.data[1]["user-handle"])
        }
        )
    },[])
        
    const user = (
        <div>
        <h1 className="text-3xl font-bold">{username}</h1>
        <h6 className="font-thin text-sm">{userhandle}</h6>
        </div> 
    )
    
    return(
        <>
            <div className="
            bg-[url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')]
            bg-no-repeat bg-cover p-6 rounded-xl
            flex justify-between items-center text-white text-lg
            ">
                <div className="flex justify-center items-center gap-10">
                    <Image
                        src={myImg}
                        width={130}
                        height={130}
                        className="object-cover"
                        alt='developer-image'
                    />
                    {user}
                </div>
                <h3 className="bg-black/30 
                p-1.5 text-sm font-thin px-5 rounded-2xl
                cursor-pointer 
                transition hover:bg-black/50">+ connect with me</h3>
            </div>            
        </>
    )
}