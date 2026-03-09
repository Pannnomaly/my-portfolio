import Container from "@/lib/Container.jsx";
import { currentYear } from "../lib/data/footerYear.js";

export default function Footer ()
{
    return (
        <footer className="pt-16 pb-8 relative text-center overflow-hidden">
            <Container>
                <div id="blob-animate" className="-right-12 -bottom-12"></div>

                <div className="mb-4 text-(--title-color) text-[1.25rem] md:text-[1.5rem] font-medium">
                    All Rights Reserved By <span className="text-(--first-color)">Supawith</span>
                </div>

                <div className="flex items-center justify-center text-(--title-color) text-[1.25rem] md:text-[1.5rem] font-medium gap-x-2">
                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path></svg>
                    <span id="footer-year" className="font-unbounded">2025 - {currentYear}</span>
                </div>
            </Container>
        </footer>
    );
}