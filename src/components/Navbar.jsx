import "./HeroSection.css"

export const Navbar = () => {
    return (
        <section className="z-10 w-100 bg-image bg-purple text-gray-light relative h-[12vh] sm:h-[12vh] md:h-[8vh] flex flex-col justify-center items-center">
            <div className="z-0 h-full w-px bg-purple_light absolute left-4 md:left-8"></div>
            <div className="z-0 absolute inset-y-0 left-1/2 w-px bg-purple_light transform -translate-x-1/2"></div>
            <div className="z-0 h-full w-px bg-purple_light absolute right-4 md:right-8"></div>
            
            <nav className="w-[80%] md:w-[90%] flex flex-row justify-between items-center">
                <p className="text-pink hidden md:block">projects</p>
                <h2 className="z-10 font-anton md:ml-16 text-xl md:text-3xl text-gray-light w-2 md:w-fit tracking-wider uppercase leading-5">It’s Lisa</h2>
                <ul className="flex flex-row w-28 justify-between items-center text-pink">
                    <li>skills</li>
                    <li>contact</li>
                </ul>
            </nav>
        </section>
    )
}