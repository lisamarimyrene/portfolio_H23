import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Skillspage() {

    const technologiesArray = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    ]

    const programsArray = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://asset.brandfetch.io/idAnDTFapY/idG4aRyg5R.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
    ]

    return (
        <div className="bg-gray-light">
            <Navbar />

            {/* <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2 top-0 bottom-0"></div>
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div> */}

            <section className="w-screen overflow-hidden px-12 md:px-20 pb-16 md:pb-20">
                <div className="flex flex-col md:flex-row justify-around md:pt-16">
                    <div className="md:w-[30%] pt-16 md:pt-20">
                        <h2 className="text-purple uppercase text-3xl font-anton">Technologies</h2>
                        <p className="py-5 pb-10">I have learned several technologies throughout my studies and on my own. I am always eager to explore new languages and technologies, and can't wait to develop my skills and knowledge further.</p>
                        <div className="flex flex-wrap">
                            {technologiesArray.map(img => <img className="w-12 md:w-14 m-3 md:m-4" src={img} alt="dev icon" />)}
                        </div>
                    </div>
                    <div className="md:w-[30%] pt-20">
                        <h2 className="text-purple uppercase text-3xl font-anton">Programs</h2>
                        <p className="pt-5 pb-10">When developing, I'm using VSCode and several other tools. Figma is a program I enjoy alot for creating lo-fi and hi-fi wireframes of my projects. When working in teams, Miro is a great tool for brainstorming ideas and such.</p>
                        <div className="flex flex-wrap">
                            {programsArray.map(img => <img className="w-12 md:w-14 m-3 md:m-4" src={img} alt="dev icon" />)}
                        </div>
                    </div>
                </div>
            </section>
            <Link className="px-12 md:px-52 pb-20 text-purple hover:text-purple_lighter text-md font-medium text-blue-darker uppercase" to="/">← Back to homepage</Link>

            {/* <div className="z-0 w-screen h-px bg-gray-medium_light absolute bottom-[-24rem] md:bottom-12"></div> */}
        </div>
    )
}