
//Components
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"
import Notes from "./Notes"

export default function Main(){
    return(
        <>
            <div className="main-container w-[100vw] flex flex-col gap-5 p-5 ">
                <Hero/>
                <Projects/>
                <Skills/>
                <Notes/>
            </div>
        </>
    )
}