import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";

export default function Homepage ()
{
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Projects />
        </div>
    );
}