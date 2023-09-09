import { ProjectSection } from "../components/ProjectSection"
import { HeroSection } from "../components/HeroSection"

export default function Homepage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProjectSection />
        </div>
    )
}