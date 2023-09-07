import "./Project.css"

export const Project = ({ side = 'left', id, projectData}) => {

    if(!projectData) {
        console.log('error: no project data for id: ' + id)
        return false
    }

    const {title, keyword, image, imageAlt} = projectData

    return (
        <div className="flex justify-center pt-7 md:pt-20">
            <div className={`z-10 w-[80%] flex flex-col ${side === 'left' ? 'items-start' : 'items-end'}`}>
                <h2 className="font-krona text-4xl md:text-7xl text-gray-medium">{id}</h2>
                <div className={`text-gray-dark flex flex-col ${side === 'left' ? 'ml-9 items-start' : 'mr-9 items-end'}`}>
                    <h3 className="tracking-wide text-gray-medium_dark py-2 md:py-3 font-anton text-2xl md:text-4xl uppercase">{title}</h3>
                    <h4 className="pb-2 md:pb-5 md:text-lg">{keyword}</h4>
                    <img className="project-image w-[95%] md:w-[60%]" src={`./project_img/${image}.png`} alt={imageAlt} />
                </div>
            </div>
        </div>
    )
}