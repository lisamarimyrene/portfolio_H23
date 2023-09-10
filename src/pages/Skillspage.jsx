import { Navbar } from "../components/Navbar"

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
        <div className="bg-gray-light pb-28 md:pb-0">
            <Navbar />
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2"></div>
            <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div>

            <section className="w-screen px-12 md:px-20 bg-gray-light flex flex-col md:flex-row justify-around">
                <div className="md:w-[30%] pt-16 md:pt-20">
                    <h2 className="text-purple uppercase md:text-3xl text-2xl font-anton">Technologies</h2>
                    <p className="py-5 pb-10">I have learned several technologies throughout my studies and on my own. I am always eager to explore new languages and technologies, and can't wait to develop my skills and knowledge further.</p>
                    <div className="flex flex-wrap">
                        {technologiesArray.map(img => <img className="w-12 md:w-14 m-3 md:m-4" src={img} alt="dev icon" />)}
                    </div>
                </div>
                <div className="md:w-[30%] pt-20">
                    <h2 className="text-purple uppercase md:text-3xl text-2xl font-anton">Programs</h2>
                    <p className="pt-5 pb-10">When developing, I'm using VSCode and several other tools. Figma is a program I enjoy alot for creating lo-fi and hi-fi wireframes of my projects. When working in teams, Miro is a great tool for brainstorming ideas and such.</p>
                    <div className="flex flex-wrap">
                        {programsArray.map(img => <img className="w-12 md:w-14 m-3 md:m-4" src={img} alt="dev icon" />)}
                    </div>
                </div>
            </section>
        </div>
    )
}