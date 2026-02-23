import ProjectSlider from "./ProjectSlider";

export default function Projects ()
{
    return (
        <div className="xl:min-h-screen w-full pt-20">
            <h2 className="text-start p-4 m-4 w-full md:w-[90%] xl:w-[80%] text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                I make Incredible <br />
                <span className="text-(--first-color)">Projects</span>
            </h2>
            <div className="p-4 m-4 w-full md:w-[90%] xl:w-[80%]">
                <ProjectSlider />
            </div>
        </div>
    );
}