import Contact from "../components/contact"
import CoreValues from "../components/core-value"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Services from "../components/services"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <CoreValues />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage