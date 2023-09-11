import "./HeroSection.css"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <section className="z-10 w-100 bg-image bg-purple text-gray-light relative h-[10vh] sm:h-[10vh] md:h-[7vh] flex flex-col justify-center items-center">
            <div className="z-0 h-full w-px bg-purple_light absolute left-4 md:left-8"></div>
            <div className="-z-10 absolute inset-y-0 left-1/2 w-px bg-purple_light transform -translate-x-1/2"></div>
            <div className="z-0 h-full w-px bg-purple_light absolute right-4 md:right-8"></div>

            <nav className="w-[80%] md:w-[90%] flex flex-row justify-between items-center">
                <Link to="/"><h2 className="its-lisa z-100 font-seymour tracking-tight ml-4 md:ml-4 text-xl md:text-pink text-gray-light w-8 md:w-fit uppercase leading-4">It’s Lisa</h2></Link>
                <ul className="flex flex-row w-40 justify-between items-center text-pink">
                    <Link to="/"><li>home</li></Link>
                    <Link to="/skills"><li>skills</li></Link>
                    <a href="mailto:lisammyrene@outlook.com"><li>contact</li></a>
                </ul>
            </nav>
        </section>
    )
}