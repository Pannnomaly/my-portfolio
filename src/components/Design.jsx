import { designs } from "../lib/data/designs.js";

export default function Design ()
{
    return (
        <div>
            <div id="blob-animate"></div>

            <div>
                <h2>Design</h2>
                <p>Web designer with Canva and Figma, creating graphic designs with Procreate, creativity and design at its best.</p>
            </div>

            <div>
                <h3>Skills & Tools</h3>

                <ul>
                    {designs.map((design) => (
                        <div key={design.id}>
                            <li>{design.name}</li>
                        </div>
                    ))}
                </ul>
            </div>

            <button>
                <svg className="w-5.5 h-5.5 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </button>
        </div>
    );
}