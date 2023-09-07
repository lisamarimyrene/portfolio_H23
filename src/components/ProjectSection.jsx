import { Project } from "./Project"
import { useState, useEffect } from "react"
import glass_spiral from "../assets/glass_spiral.png"


export const ProjectSection = () => {
    const [projects, setProjects] = useState()

    const getData = () => {
        fetch('projects.json')
            .then(res => {
                return res.json()
            })
            .then(res => {
                setProjects(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const firstThreeProjects = () => {
        projects && projects.map(project => {
            return <p>test</p>
        })
    }

    const restOfProject = () => {

    }

    return (
        <section className="bg-gray-light text-gray-dark relative w-screen overflow-hidden pb-20">
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2"></div>
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div>

            {/* please dont look at this *dead-emoji* */}
            {projects && projects.map((project, i) => i < 3 && <Project side={i % 2 === 0 ? 'left' : 'right'} id={'0' + (i + 1)} projectData={project} />)}

            <img className="rotate-[-60deg] -my-10" src={glass_spiral} alt="Glass spiral." />
            <div className="flex flex-col items-center">
                <p className="z-10 w-3/5 text-justify pb-5">My name is Lisa Mari Myrene, and I'm in my third year studying Web Development at NTNU Gjøvik. I have always had an interest in Web Development and Design, and are therefore currently learning a larger aspect of the profession, both Front-End and Back-End oriented. Now I am searching to get some in-field experience as well.</p>
                <p className="z-10 w-3/5 text-justify">Please don't hesistate to contact me if you have questions. In the meantime, check out my projects!</p>
            </div>

             {/* please dont look at this *dead-emoji* */}
            {projects && projects.map((project, i) => i >= 3 && <Project side={i % 2 === 0 ? 'right' : 'left'} id={'0' + (i + 1)} projectData={project} />)}
        </section>
    )
}