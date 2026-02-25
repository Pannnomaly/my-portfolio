import { educations } from "../lib/data/educations.js";

export default function Education ()
{
    return (
        <div>
            {educations.map((education) => (
                <div key={education.id}>
                    <div>
                        <div>
                            <h1>{education.title}</h1>
                            <h3>{education.subTitle}</h3>
                        </div>
        
                        <h2>{education.year}</h2>
                    </div>
        
                    <p>{education.description}</p>
                </div>
            ))}
        </div>
    );
}