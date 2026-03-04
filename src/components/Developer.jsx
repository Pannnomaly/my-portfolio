import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { develops } from "../lib/data/develops.js";

export default function Developer ()
{
    const [open, setOpen] = useState(false);

    return (
        <div className="relative bg-(--container-color) py-8 px-6 rounded-[3rem] grid gap-y-6 overflow-hidden">
            <div className="blob-animate-service"></div>

            <div className="relative z-1">
                <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] mb-4">Developer</h2>
                <p className="text-[1.25rem] md:text-[1.5rem]">Website creation with HTML5, CSS3, Tailwind CSS, JavaScript.
                    Professional Full - Stack websites with React, Node.js, Express.js, MongoDB (MERN Stack), and lots of creativity.
                </p>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-1 overflow-hidden"
                    >
                        <h3 className="text-(--text-color) font-normal text-[1.25rem] md:text-[1.5rem] mb-2">Skills & Tools</h3>
                    
                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                            {develops.map((develop) => (
                                    <li key={develop.id} id="service-skill-lists" className="text-[1rem] md:text-[1.25rem] bg-(--container-color) text-(--title-color) py-1 px-2.5 rounded-[4rem] font-unbounded">{develop.name}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <button onClick={() => setOpen(!open)} className="grid place-items-center w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 shrink-0 rounded-lg bg-(--body-color) absolute right-8 bottom-6 lg:bottom-4 z-2 cursor-pointer">
                <motion.svg
                    id="service-button"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-(--title-color) rounded-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"/>
                </motion.svg>
            </button>
        </div>
    );
}