import { Link } from "react-scroll";
import Container from "../lib/Container.jsx";

export default function Navbar()
{
    const getOffset = () => {
    if (window.innerWidth < 768) return 40;
    if (window.innerWidth < 1024) return 90;
    if (window.innerWidth < 1280) return 90;
    return 100;
    };

    return (
        <nav className="fixed w-full py-2 pt-5 bg-linear-to-b from-(--body-color) from-60% to-[hsla(240,100%,2%,0)] z-(--z-fixed)">
            <div id="blob-animate" className="-top-12 -left-12"></div>

            <Container className="flex justify-between items-center py-4 font-unbounded tracking-widest">
                <div className="font-semibold text-(--title-color) text-shadow-2xs hover:text-(--first-color) self-start transition duration-400 ease-in-out cursor-pointer">
                    <Link to="hero-section" smooth duration={500} spy offset={getOffset() - 20} activeClass="active" isDynamic>Supawith</Link>
                </div>
                <ul className="flex flex-col items-end gap-y-2 md:flex-row md:gap-x-12 lg:gap-x-22">
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="about-me-section" smooth duration={500} spy activeClass="active" offset={getOffset() + 10} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">About Me</Link>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="projects-section" smooth duration={500} spy activeClass="active" offset={getOffset() + 10} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">Projects</Link>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="contact-section" smooth duration={500} spy activeClass="active" offset={-getOffset()} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">Contact</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}