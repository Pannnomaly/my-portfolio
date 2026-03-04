import { useState } from "react";
import ToggleButton from "./ToggleButton.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Container from "@/lib/Container.jsx";

export default function Work ()
{
    const [view, setView] = useState("experience");

    return (
        <div className="pt-20 xl:min-h-screen lg:pt-36 lg:pb-16">
            <Container>
                <h2 className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                    <span className="text-(--first-color)">My Work</span>
                    <br /> Experience
                </h2>

                <div>
                    <div className="bg-(--container-color) mt-16 mb-10 lg:mt-20 lg:mb-14 xl:mt-22 xl:mb-18 py-5 px-8 rounded-[4rem] flex justify-between md:justify-self-center md:gap-x-25">
                        <ToggleButton
                        onClick={() => {
                            setView("experience");
                        }}
                        active={view === "experience"}>
                            <div className="w-full flex gap-x-1 md:gap-x-3 items-center">
                                <p>Experience</p>
                                <span><svg className="w-5.5 h-5.5 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM15 7H9V19H15V7ZM7 7H4V19H7V7ZM17 7V19H20V7H17ZM9 3V5H15V3H9Z"></path></svg></span>
                            </div>
                        </ToggleButton>
                        <ToggleButton
                        onClick={() => {
                            setView("education");
                        }}
                        active={view === "education"}>
                            <div className="w-full flex gap-x-1 md:gap-x-3 items-center">
                                <p>Education</p>
                                <span><svg className="w-5.5 h-5.5 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path></svg></span>
                            </div>
                        </ToggleButton>
                    </div>

                    <div className="relative pl-6 lg:pl-0">
                        <div id="work-line" className="absolute -left-1 top-0 h-full w-1"></div>
                        <div className="grid gap-y-16">
                            {view === "experience" && <Experience />}
                            {view === "education" && <Education />}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}