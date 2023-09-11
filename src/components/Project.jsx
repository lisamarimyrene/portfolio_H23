import "./Project.css"
import { Link } from 'react-router-dom'

export const Project = ({ side = 'left', id, projectData}) => {

    if(!projectData) {
        console.log('error: no project data for id: ' + id)
        return false
    }

    const {title, keyword, image} = projectData

    return (
        <div className="flex justify-center pt-7 md:pt-0 ">
            <div className={`z-10 w-[80%] flex flex-col ${side === 'left' ? 'items-start' : 'items-end'}`}>
                <h2 className="font-seymour text-4xl md:text-7xl text-purple_lighter">{id}</h2>
                <div className={`text-gray-dark flex flex-col ${side === 'left' ? 'ml-[2.5rem] md:ml-[5rem] items-start' : 'mr-[2rem] md:mr-[4.5rem] items-end text-right'}`}>
                <Link to={`/project/${title}`}><h3 className="hover:text-opacity-50 hover:line-through tracking-normal text-purple_light py-2 md:py-3 font-seymour text-lg leading-6 md:text-2xl uppercase">{title}</h3></Link>
                    <h4 className="pb-2 md:pb-5 md:text-lg">{keyword}</h4>
                    <Link className="w-[95%] md:w-[60%]" to={`/project/${title}`}><img className="hover:opacity-80 project-image " src={`./project_img/${image}.png`} alt="Project image." /></Link>
                </div>
            </div>
        </div>
    )
}
