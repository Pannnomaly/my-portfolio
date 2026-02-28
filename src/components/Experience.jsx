import { experiences } from "../lib/data/experiences.js";

export default function Experience ()
{
    return (
        <>
            {experiences.map((experience) => (
                <div id="work-card" key={experience.id} className="grid gap-y-4">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] mb-2">{experience.title}</h1>
                            <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal text-(--first-color)">{experience.subTitle}</h3>
                        </div>

                        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">{experience.year}</h2>
                    </div>

                    <p>{experience.description}</p>
                </div>
            ))}
        </>
    );
}