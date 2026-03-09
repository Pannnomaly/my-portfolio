import { Link } from "react-scroll";
import Container from "../lib/Container.jsx";

export default function Navbar()
{
    const getNavbarOffset = () => {
    const navbar = document.getElementById("navbar");
    return navbar ? -navbar.offsetHeight : 80;
};

    return (
        <nav className="fixed w-full py-2 pt-5 bg-linear-to-b from-(--body-color) from-60% to-[hsla(240,100%,2%,0)] z-(--z-fixed)">
            <div id="blob-animate" className="-top-12 -left-12"></div>

            <Container className="flex justify-between items-center py-4 font-unbounded tracking-widest">
                <div className="font-semibold text-(--title-color) text-shadow-2xs hover:text-(--first-color) self-start transition duration-400 ease-in-out cursor-pointer">
                    <Link to="hero-section" smooth duration={100} spy offset={getNavbarOffset()} activeClass="active" isDynamic>Supawith</Link>
                </div>
                <ul className="flex flex-col items-end gap-y-2 md:flex-row md:gap-x-12 lg:gap-x-22">
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="about-me-section" smooth duration={100} spy activeClass="active" offset={getNavbarOffset()} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">About Me</Link>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="projects-section" smooth duration={100} spy activeClass="active" offset={getNavbarOffset()} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">Projects</Link>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <Link to="contact-section" smooth duration={100} spy activeClass="active" offset={-getNavbarOffset()} isDynamic className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out cursor-pointer">Contact</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}