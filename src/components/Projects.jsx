import ProjectSlider from "./ProjectSlider";
import Container from "../lib/container.jsx";

export default function Projects ()
{
    return (
        <div className="pt-20 xl:min-h-screen">
            <Container>
                <h2 className="text-start text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                    I make Incredible <br />
                    <span className="text-(--first-color)">Projects</span>
                </h2>
                <div className="mt-12">
                    <ProjectSlider />
                </div>
            </Container>
        </div>
    );
}