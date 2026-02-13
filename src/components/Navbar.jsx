export default function Navbar() {
    return (
        <div className="fixed w-full bg-linear-to-b from-(--body-color) from-60% to-[hsla(240,100%,2%,0)] z-(--z-fixed)">
            <div id="blob-animate" className="-top-10 -left-10"></div>
            <nav className="flex justify-between items-center p-4 m-4">
                <div className="font-unbounded font-semibold text-(--title-color) text-shadow-2xs hover:text-(--first-color) self-start transition duration-400 ease-in-out">
                    <a href="#">Supawith</a>
                </div>
                <div>
                    <ul className="flex flex-col items-end gap-y-2 md:flex-row md: gap-x-22">
                        <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                            <a href="#about" className="font-unbounded text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">About Me</a>
                        </li>
                        <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                            <a href="#projects" className="font-unbounded text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">Projects</a>
                        </li>
                        <li className="text-(--title-color) hover:text-(--first-color) font-semibold">
                            <a href="#contact" className="font-unbounded text-(--small-font-size) text-shadow-2xs transition duration-400 ease-in-out">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}