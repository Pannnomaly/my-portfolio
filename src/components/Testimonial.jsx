import { motion } from "framer-motion";
import { testimonialTitleReveal, testimonialSliderReveal } from "../lib/animations/testimonialReveal.js";
import Container from "../lib/Container.jsx";
import TestimonialSlider from "./TestimonailSlider.jsx";

export default function Testimonial ()
{
    return (
        <div className="pt-20 xl:min-h-screen md:pt-36 md:pb-16">
            <Container>
                <motion.h2 {...testimonialTitleReveal} className="md:text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                    <span className="text-(--first-color)">What They Say</span>
                    <br />About Me
                </motion.h2>

                <motion.div {...testimonialSliderReveal} id="testimonial-container" className="mt-16 mb-10 lg:mt-20 lg:mb-14 xl:mt-22 xl:mb-18 relative mx-0 overflow-hidden">
                    <div>
                        <TestimonialSlider />
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}