
import "./Homepage.css"
import three_colored_spheres from "../assets/three_colored_spheres.png"

export default function Homepage() {
    return (
        <div className="min-h-screen">
            <section className="bg-gray-dark text-gray-light relative h-screen">
                <nav>
                    <ul className="flex flew-row absolute end-5 mr-12 mt-6 w-28 justify-between">
                        <li>skills</li>
                        <li>contact</li>
                    </ul>
                </nav>

                <div className="flex items-center flex-row pt-24">
                    <p className="flex justify-start ml-12 self-start text-lg">Web Developer</p>
                    <img className="w-1/5 rotate-45 flex mx-auto" src={three_colored_spheres} alt="Three colored spheres." />
                    <div className="flex justify-end mr-12 self-end text-lg">
                        <ul className="text-right">
                            <li>Front-End</li>
                            <li>Back-End</li>
                            <li>Design</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>

                <h1 className="logo-name font-anton w-full uppercase absolute end-4">It’s Lisa</h1>

            </section>
            <section>

            </section>
        </div>
    )
}