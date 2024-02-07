import Image from "next/image";
import { Inter } from "next/font/google";

//assets
import myImg from '../../public/myImg.png'

export default function Hero(){

    
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
                    <div>
                        <h1 className="text-3xl font-bold">Chandan Pandey</h1>
                        <h6 className="font-thin text-sm">@chDevs</h6>
                    </div>
                </div>
                <h3 className="bg-black/30 
                p-1.5 text-sm font-thin px-5 rounded-2xl
                cursor-pointer 
                transition hover:bg-black/50">+ connect with me</h3>
            </div>            
        </>
    )
}