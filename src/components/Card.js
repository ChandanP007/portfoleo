import { useState, useEffect } from "react";

export default function Card(props){

    const skills = props.skills;
    const allSkills = skills.map((skill)=>{
        if(skill)
        return (
        <li className="text-sm border-[1px] border-opacity-60 p-1 rounded-md border-green-400">{skill}</li>
        )
    }).slice(1);


    return(
        <>
            <div className="p-7 bg-blue-900/10 text-white max-w-[320px] rounded-md">
                <h1 className="pb-5 text-xl text-gray-400">{props.title}</h1>
                <ul className="flex gap-2 flex-wrap">
                    
                    {allSkills}
                </ul>
            </div>
        </>
    )
}