import { useEffect, useState, Suspense} from 'react';
import Card from './Card'
import Loading from './Loading';


export default function Skills(){    

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillApi = "https://script.googleusercontent.com/macros/echo?user_content_key=4H_GvCvtbnm_nGOwCVuKfRRiKx4Nor3sCxjnfNAtbtW9eF5LThu1QHY_nFzpD3KwVYr30gPke4TtfzBX4I5BUT4a0s-mGpj1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNOmlJHY5FOeRpuVwjtDrDkDwr0z_ocngtG-J-YdYYZlWnGvdqjDS4n6pPSZxbb6y9uvWAIr6K50pgJcKbCrbbwzaoVf0hMOVA&lib=M8QvURP4d2RUdhnzqeWthMXBMBDukkyC4";
        fetch(skillApi)
        .then((response)=>response)
        .then((e)=>e.json())
        .then((e)=>setSkills(e.data));
    }, [])


    return(
        <>
        <div className="p-5">
            <h1 className="text-white text-xl font-semibold pb-5">What I know</h1>
            <div className="skillCards flex gap-5 ">
        
                <Card title="Frontend" skills={skills.map((skill)=>skill.frontend)}/>
                <Card title="Backend" skills={skills.map((skill)=>skill.backend)} />
                <Card title="DevOps" skills={skills.map((skill)=>skill.databases)} />
    
            </div>
        </div>
        </>
    )
}