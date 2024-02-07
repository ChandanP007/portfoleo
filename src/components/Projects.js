import {React, useEffect, useState} from 'react';

import Image from 'next/image'

export default function Projects(){
    
    const [myProjects, setProjects] = useState([]);

    useEffect(()=>{
        const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=8_OpP2qg3Mn3N7T7__EAomnY-Sez675LIAVDpRoZDCWVJZr8LxzjeIu4H-M9TRAwvFxjpW6uRdxadmznp6l01_xZ0yze77aUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNRYRwcwJmtXHSqDe0pRQXXxBBa181tylv9A2IDFwF_r6bpkl5DY7gHYlZ_gPN8cM2sXGEw5inys3QKXkL7Qugu7iXrkydquFg&lib=M8QvURP4d2RUdhnzqeWthMXBMBDukkyC4"
        fetch(apiUrl)
        .then((response)=>response)
        .then((e) => e.json())
        .then((e)=>setProjects(e.data));
        
    },[]);


    let allProjects = myProjects.map((project,index)=>{
        return (
            <div className='text-black bg-white/70 rounded-md cursor-pointer opacity-70 transition hover:opacity-100'>
                <Image src={project["project-thumbnail"]} width="400" height="100"/>
                <h2 className='text-xl font-semibold px-5 py-2 text-left'>{project["project-name"]}</h2>
                <p className="text-sm px-5 py-2">{project["tech-stack"]}</p>
             </div>
        )
    }).slice(1,myProjects.length);
    
    
    return(
        <div className="p-5">
            <h1 className="text-white text-xl font-semibold">Projects</h1>
            
            <div className="projects flex justify-start gap-10 items-center py-5">
                <div className='project flex gap-10 p-5'>
                    {allProjects}
                </div>
            </div>
        </div>
    )

}