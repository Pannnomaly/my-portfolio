import { motion } from "framer-motion";
import { projectsTitleReveal, projectsSliderReveal } from "../lib/animations/projectsReveal.js";
import ProjectSlider from "./ProjectSlider.jsx";
import Container from "../lib/Container.jsx";

export default function Projects ()
{
    return (
        <div id="projects-section" className="pt-20 xl:min-h-screen lg:pt-36 lg:pb-16">
            <Container>
                <motion.h2 {...projectsTitleReveal} className="text-start text-[2rem] md:text-[2.5rem] md:text-center md:ml-0 lg:text-[3rem] xl:text-[3.25rem]">
                    I make Incredible <br />
                    <span className="text-(--first-color)">Projects</span>
                </motion.h2>

                <motion.div {...projectsSliderReveal} className="mt-16 mb-10 lg:mt-20 lg:mb-14 xl:mt-22 xl:mb-18">
                    <ProjectSlider />
                </motion.div>
            </Container>
        </div>
    );
}