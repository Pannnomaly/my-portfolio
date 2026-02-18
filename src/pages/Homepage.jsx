import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";

export default function Homepage ()
{
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}