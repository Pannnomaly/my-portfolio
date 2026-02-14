import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar.jsx";

export default function Homepage ()
{
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
        </div>
    );
}