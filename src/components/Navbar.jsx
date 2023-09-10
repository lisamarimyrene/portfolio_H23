import "./HeroSection.css"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <section className="z-10 w-100 bg-image bg-purple text-gray-light relative h-[12vh] sm:h-[12vh] md:h-[8vh] flex flex-col justify-center items-center">
            <div className="z-0 h-full w-px bg-purple_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-purple_light transform -translate-x-1/2"></div>
            <div className="z-0 h-full w-px bg-purple_light absolute right-4 md:right-8"></div>

            <nav className="w-[80%] md:w-[90%] flex flex-row justify-between items-center">
                <Link className="hidden md:block" to="/"><p className="text-pink">projects</p></Link>
                <Link to="/"><h2 className="its-lisa z-10 font-anton ml-4 md:ml-16 text-xl md:text-3xl text-gray-light w-8 md:w-fit tracking-wider uppercase leading-5">It’s Lisa</h2></Link>
                <ul className="flex flex-row w-28 justify-between items-center text-pink">
                    <Link to="/skills"><li>skills</li></Link>
                    <a href="mailto:lisammyrene@outlook.com"><li>contact</li></a>
                </ul>
            </nav>
        </section>
    )
}