import { testimonials } from "../lib/data/testimonials.js";
import Marquee from "react-fast-marquee";

export default function TestimonialSlider ()
{
    return (
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
            {testimonials.map((testimonial) => (
                <article key={testimonial.id} className="relative flex flex-col w-[350px] md:!w-[450px] lg:!w-[550px] mx-4 bg-(--container-color) pt-6 px-6 pb-10 rounded-[3rem] text-center overflow-hidden cursor-pointer">
                    <div id="blob-animate-testimonial"></div>
                    
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
                        <div className="relative z-1 px-2 md:px-4 lg:px-8">
                            <img className="w-50 object-fill rounded-3xl lg:rounded-4xl mt-0 mx-auto mb-2" src={testimonial.image} alt={testimonial.alt} />
                            <h2 className="font-normal text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] mb-4">{testimonial.name}</h2>

                            <div className="flex justify-center items-center gap-x-2 mb-3">
                                <div className="flex justify-center gap-x-1">
                                    {Array.from({ length: testimonial.star }, (_, i) => (   
                                        <svg key={i} className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 shrink-0 font-normal text-(--title-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                    ))}
                                    {Array.from({ length: testimonial.halfStar }, (_, i) => (   
                                        <svg key={i} className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 shrink-0 font-normal text-(--title-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                    ))}
                                </div>
                
                                <h3 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]">{testimonial.allStar}</h3>
                            </div>
                            
                            <p className="flex-1 text-shadow-lg text-[1.25rem] md:text-[1.5rem] h-[120px] md:h-[140px] lg:h-[180px] overflow-hidden text-ellipsis line-clamp-4 lg:line-clamp-5">{testimonial.description}</p>
                        </div>
                    </a>
                </article>
            ))}
        </Marquee>
    );
}