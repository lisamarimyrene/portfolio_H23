import projectEx from "../assets/projectEx.png"

export const Projects = ({side = 'left'}) => {
    return (
        <div className="flex justify-center pt-7">
        <div className={`z-10 w-[80%] flex flex-col ${side === 'left' ? 'items-start' : 'items-end'}`}>
          <h2 className="font-krona text-4xl text-gray-medium">01</h2>
          <div className={`text-gray-dark flex flex-col ${side === 'left' ? 'ml-9 items-start' : 'mr-9 items-end'}`}>
            <h3 className="py-2 font-anton text-2xl uppercase">Project</h3>
            <h4 className="pb-2">Backend</h4>
            <img className="w-[95%]" src={projectEx} alt="Project image." />
          </div>
        </div>
      </div>
    )
}