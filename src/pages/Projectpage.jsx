
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar";
import "./Projectpage.css";

export default function Projectpage() {

    const [projects, setProjects] = useState([]); // Initialize state for projects
    const { id } = useParams();
    // console.log("Project name: ", id);

    const getData = () => {
        fetch('/projects.json')
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setProjects(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    // Find the project with the matching title
    const decodedProjectName = decodeURIComponent(id); // decode the project name in the URL
    // console.log("decoded", decodedProjectName);
    const projectData = projects.find((p) => p.title === decodedProjectName); // find the project object with the matching name

    if (!projectData) {
        return <div>Project not found.</div>;
    }

    const { title, keywords, description, link, image } = projectData;

    return (
        <div className="bg-gray-light">
            <Navbar />
            {/* <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2"></div>
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div> */}

            <section className="flex flex-col md:flex-row justify-between w-screen px-12 md:px-32 pt-12 md:pt-24 md:pb-20">
                <div className="md:w-[45%]">
                    <h1 className="z-10 text-purple text-blue-darker uppercase md:text-2xl tracking-tight font-seymour text-lg leading-6">{title}</h1>
                    <p className="z-10 text-purple_light my-6"><i>{keywords}</i></p>
                    <Link className=" z-10 text-purple hover:text-purple_lighter text-md font-medium text-blue-darker hover:text-blue-primary uppercase" to={link}>GitHub Repository →</Link>
                    <p className="mb-12 mt-8 md:mb-0 text-justify text-gray-dark ">{description}</p>
                    {/* <div className="z-10 h-fit md:flex md:flex-row md:justify-between my-12 md:my-0 md:mt-12">
                    <p className="md:w-[45%] mb-12 md:mb-0 text-justify text-gray-dark ">{description}</p>
                    <img className="z-10 mb-14 md:w-[45%]" src={`../project_img/${image}.png`} alt="Project image." />
                </div> */}
                </div>
                <img className="image z-10 mb-14 md:mb-0 md:w-[45%] md:mt-16" src={`../project_img/${image}.png`} alt="Project image." />
            </section>
            <Link className="px-12 md:px-32 pb-20 md:pb-0 text-purple hover:text-purple_lighter text-md font-medium text-blue-darker uppercase" to="/">← Back to all projects</Link>
            {/* <div className="z-0 w-screen h-px bg-gray-medium_light absolute bottom-[-20rem] sm:bottom-[-20rem] md:bottom-[-100px]"></div> */}
        </div>
    )
}