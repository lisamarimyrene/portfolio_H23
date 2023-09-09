
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Projectpage() {

    const [projects, setProjects] = useState([]); // Initialize state for projects
    const { id } = useParams();
    console.log("Project name: ", id);

    const getData = () => {
        fetch('/projects.json')
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res)
                setProjects(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    // Find the project with the matching title
    const decodedProjectName = decodeURIComponent(id); // decode the project name in the URL
    console.log("decoded", decodedProjectName);
    const projectData = projects.find((p) => p.title === decodedProjectName); // find the project object with the matching name

    if (!projectData) {
        return <div>Project not found.</div>;
    }

    // setProjects(decodedProjectName)

    const { title, keywords, description, link, image } = projectData;

    return (
        <div className="w-fit flex flex-col justify-center items-center text-left bg-white-light min-h-screen text-white-darker pt-36 md:pt-48">
            <h1 className="leading-tight md:w-2/4 text-center md:text-5xl text-3xl text-blue-darker mb-8 font-helvetica font-semibold">{title}</h1>
            <p className="w-3/4 md:w-full text-center"><i>{keywords}</i></p>
            <a className="mt-8 text-lg md:text-lg font-medium text-blue-darker hover:text-blue-primary " href={link}>Link to GitHub repo</a>
            <p className="my-12 md:my-14 w-3/4 md:w-2/4">{description}</p>
            <img className="w-3/4 md:w-1/2 mb-28" src={`./project_img/${image}.png`} alt="Project image." />
        </div>
    )
}