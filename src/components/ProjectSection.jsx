import { Project } from "./Project"
import { useState, useEffect } from "react"
import glass_spiral from "../assets/glass_spiral.png"
import three_gradient_spheres from "../assets/three_gradient_spheres.png"

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

    return (
        <section className="bg-gray-light text-gray-dark relative w-screen overflow-hidden pb-20 md:pb-36 pt-8 md:pt-24">
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2"></div>
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div>

            {/* please dont look at this *dead-emoji* */}
            {projects && projects.map((project, i) => i < 3 && <Project side={i % 2 === 0 ? 'left' : 'right'} id={'0' + (i + 1)} projectData={project} />)}

            <div className="flex flex-col md:flex-row md:justify-evenly md:items-center md:my-20">
                <img className="hover:animate-pulse rotate-[-60deg] md:rotate-[-90deg] -my-5 md:h-[20rem] md:order-last md:my-0" src={glass_spiral} alt="Glass spiral." />
                <div className="flex flex-col items-center pb-6 md:pb-0 md:w-[40%] md:-ml-[8rem] md:text-lg md:leading-8">
                    <p className="z-10 w-3/5 text-justify">My name is Lisa Mari Myrene, and I'm in my third year studying Web Development at NTNU Gjøvik. I have always had an interest in Web Development and Design, and are therefore currently learning a larger aspect of the profession, both Front-End and Back-End oriented. I am currently extending my horizon by taking an exchange semester at CODE University in Berlin. Now I'm looking for a workplace where I can share my skills in the future.</p>
                    <p className="z-10 text-5xl md:text-6xl py-8 md:py-10 hover:animate-spin">🪩</p>
                    <p className="z-10 w-3/5 text-justify">Please don't hesistate to contact me if you have questions. In the meantime, check out my projects!</p>
                </div>
            </div>

            {/* please dont look at this *dead-emoji* */}
            {projects && projects.map((project, i) => i >= 3 && <Project side={i % 2 === 0 ? 'right' : 'left'} id={'0' + (i + 1)} projectData={project} />)}
            {/* ml-12 md:ml-36 my-16 md:my-24 h-32 */}
        </section>
    )
}