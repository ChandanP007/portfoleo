
//Components
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"

export default function Main(){
    return(
        <>
            <div className="main-container w-[90vw] flex flex-col gap-5 p-5">
                <Hero/>
                <Projects/>
                <Skills/>
            </div>
        </>
    )
}