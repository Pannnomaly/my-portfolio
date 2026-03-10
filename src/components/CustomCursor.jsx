import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor ()
{
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [hidden, setHidden] = useState(false);

    useEffect(() => {

        const moveCursor = (e) => {

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target.closest("a, button, svg");
            const isInteractive = !!target;

            setHidden(prev => prev !== isInteractive ? isInteractive : prev);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [mouseX, mouseY]);

    return (
            <motion.div
                className="cursor fixed left-0 top-0 z-[9999] w-12.5 h-12.5 bg-(--first-color) rounded-[50%]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: hidden ? 0 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                }}
            />
    );
}