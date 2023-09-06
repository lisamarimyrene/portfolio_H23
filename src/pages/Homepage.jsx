
import "./Homepage.css"
import three_colored_spheres from "../assets/three_colored_spheres.png"
import glass_spiral from "../assets/glass_spiral.png"
import { Projects } from "../components/Projects"

export default function Homepage() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="bg-gray-dark text-gray-light relative h-[48vh] sm:h-[55vh] md:h-screen flex flex-col justify-between">
                <div className="z-0 w-screen h-px bg-gray-medium_dark absolute top-14"></div>
                <div className="z-0 h-screen w-px bg-gray-medium_dark absolute left-4 md:left-8"></div>
                <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_dark transform -translate-x-1/2"></div>
                <div className="z-0 h-screen w-px bg-gray-medium_dark absolute right-4 md:right-8"></div>
                <nav>
                    <ul className="flex flew-row absolute end-5 mr-6 md:mr-12 mt-4 w-28 justify-between text-pink">
                        <li>skills</li>
                        <li>contact</li>
                    </ul>
                </nav>

                <div className="flex items-center flex-grow pt-16 md:pt-24 h-[20rem] md:h-fit ">
                    <p className="flex justify-start ml-8 md:ml-20 self-start text-base md:text-2xl">Web Developer</p>
                    <img className="w-1/4 md:w-1/5 rotate-45 md:mb-14 flex mx-auto" src={three_colored_spheres} alt="Three colored spheres." />
                    <div className="flex justify-end mr-8 md:mr-16 md:mb-16 self-end text-sm md:text-lg">
                        <ul className="text-right">
                            <li>Front-End</li>
                            <li>Back-End</li>
                            <li>Design</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>
                
                <h1 className="z-10 logo-name font-anton w-full uppercase my-0 py-0 text-center md:leading-[27rem]">It’s Lisa</h1>
            </section>

            {/* Main section */}
            <section className="bg-gray-light text-gray-dark relative w-screen overflow-hidden pb-20">
                <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute left-4 md:left-8"></div>
                <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-gray-medium_light transform -translate-x-1/2"></div>
                <div className="z-0 inset-y-0 w-px bg-gray-medium_light absolute right-4 md:right-8"></div>
                <Projects />
                <Projects />
                <Projects />
                <img className="rotate-[-60deg] -my-10" src={glass_spiral} alt="Glass spiral." />
                <div className="flex flex-col items-center">
                    <p className="z-10 w-3/5 text-justify pb-5">My name is Lisa Mari Myrene, and I'm in my third year studying Web Development at NTNU Gjøvik. I have always had an interest in Web Development and Design, and are therefore currently learning a larger aspect of the profession, both Front-End and Back-End oriented. Now I am searching to get some in-field experience as well.</p>
                    <p className="z-10 w-3/5 text-justify">Please don't hesistate to contact me if you have questions. In the meantime, check out my projects!</p>
                </div>
                <Projects />
                <Projects />
                <Projects />
            </section>
        </div>
    )
}