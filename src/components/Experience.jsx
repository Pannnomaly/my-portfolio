import { experiences } from "../lib/data/experiences.js";

export default function Experience ()
{
    return (
        <div>
            {experiences.map((experience) => (
                <div key={experience.id}>
                    <div>
                        <div>
                            <h1>{experience.title}</h1>
                            <h3>{experience.subTitle}</h3>
                        </div>

                        <h2>{experience.year}</h2>
                    </div>

                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    );
}