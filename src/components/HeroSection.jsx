import "./HeroSection.css"
import three_colored_spheres from "../assets/three_colored_spheres.png"

export const HeroSection = () => {
    return (
        <section className="bg-image bg-purple text-gray-light relative h-[48vh] sm:h-[55vh] md:h-screen flex flex-col justify-between">
            <div className="z-0 w-screen h-px bg-purple_light absolute top-14"></div>
            <div className="z-0 h-screen w-px bg-purple_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-purple_light transform -translate-x-1/2"></div>
            <div className="z-0 h-screen w-px bg-purple_light absolute right-4 md:right-8"></div>
            <nav>
                <ul className="flex flew-row absolute end-5 mr-6 md:mr-12 mt-4 w-28 justify-between text-pink">
                    <li>skills</li>
                    <li>contact</li>
                </ul>
            </nav>

            <div className="flex items-center flex-grow pt-16 md:pt-24 h-[20rem] md:h-fit ">
                <p className="webdev hover:text-yellow flex justify-start ml-8 md:ml-20 self-start text-base md:text-2xl">Web Developer</p>
                <img className="w-1/4 md:w-1/5 rotate-45 md:mb-14 flex mx-auto" src={three_colored_spheres} alt="Three colored spheres." />
                <div className="flex justify-end mr-8 md:mr-16 md:mb-16 self-end text-sm md:text-lg">
                    <ul className="text-right">
                        <li className="l1">Front-End</li>
                        <li className="l2">Back-End</li>
                        <li className="l3">Design</li>
                        <li className="l4">Accessibility</li>
                    </ul>
                </div>
            </div>

            <h1 className="z-10 logo-name font-anton w-full uppercase my-0 py-0 text-center md:leading-[27rem]">It’s Lisa</h1>
        </section>
    )
}