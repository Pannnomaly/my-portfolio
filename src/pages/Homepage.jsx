import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Work from "@/components/Work.jsx";
import Services from "@/components/Services.jsx";

export default function Homepage ()
{
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Work />
            <Services />
        </div>
    );
}