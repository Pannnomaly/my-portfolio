import Container from "../lib/Container.jsx";

export default function Navbar() {
    return (
        <div className="fixed w-full py-2 pt-5 bg-linear-to-b from-(--body-color) from-60% to-[hsla(240,100%,2%,0)] z-(--z-fixed)">
            <div id="blob-animate" className="-top-12 -left-12"></div>

            <Container className="flex justify-between items-center py-4 font-unbounded tracking-widest">
                <div className="font-semibold text-(--title-color) text-shadow-2xs hover:text-(--first-color) self-start transition duration-400 ease-in-out">
                    <a href="#">Supawith</a>
                </div>
                <ul className="flex flex-col items-end gap-y-2 md:flex-row md:gap-x-12 lg:gap-x-22">
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#about" className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">About Me</a>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#projects" className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">Projects</a>
                    </li>
                    <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                        <a href="#contact" className="text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">Contact</a>
                    </li>
                </ul>
            </Container>
        </div>
    );
}