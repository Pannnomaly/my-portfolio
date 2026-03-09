import { useEffect } from "react";
import Container from "../lib/Container.jsx";

export default function Navbar() 
{
    useEffect(() => {

    const sectionIds = [
    "hero-section",
    "about-me-section",
    "projects-section",
    "contact-section"
    ];

    const sections = sectionIds.map(id => document.getElementById(id));
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach((link) => {
            link.classList.remove("active");
            });

            const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
            );

            activeLink?.classList.add("active");

        }

        });

    },
    {
        threshold: 0.35
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

    }, []);

    return (
        <nav className="fixed w-full py-2 pt-5 bg-linear-to-b from-(--body-color) from-60% to-[hsla(240,100%,2%,0)] z-(--z-fixed)">
            <div id="blob-animate" className="-top-12 -left-12"></div>

            <Container className="flex justify-between items-center py-4 font-unbounded tracking-widest">
                <div className="font-semibold text-(--title-color) text-shadow-lg hover:text-(--first-color) self-start transition duration-400 ease-in-out">
                    <a href="#hero-section">Supawith</a>
                </div>
                <ul className="flex flex-col items-end gap-y-2 md:flex-row md:gap-x-12 lg:gap-x-22">
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#about-me-section" className="nav-link text-(--small-font-size) text-shadow-lg transition duration-400 ease-in-out">About Me</a>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#projects-section" className="nav-link text-(--small-font-size) text-shadow-lg transition duration-400 ease-in-out">Projects</a>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#contact-section" className="nav-link text-(--small-font-size) text-shadow-lg transition duration-400 ease-in-out">Contact</a>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}