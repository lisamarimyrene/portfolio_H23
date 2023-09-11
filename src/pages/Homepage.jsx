import { ProjectSection } from "../components/ProjectSection"
import { HeroSection } from "../components/HeroSection"
import { Footer } from "../components/Footer"

export default function Homepage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProjectSection />
            <Footer />
        </div>
    )
}