import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor ()
{
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY
            });

        const target = e.target.closest("a, button, svg");

            if (target) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
            <motion.div
                className="cursor fixed left-0 top-0 z-9999 w-12.5 h-12.5 bg-(--first-color) rounded-[50%]"
                animate={{
                    x: mouse.x,
                    y: mouse.y,
                    scale: hidden ? 0 : 1
                }}
                style={{
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            />
    );
}