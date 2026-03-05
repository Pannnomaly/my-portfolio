import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { projects } from "../lib/data/projects.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectSlider() {
  return (
    <div className="project-slider-wrapper">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            autoHeight={false}
            slidesPerGroup={1}
            centeredSlides={true}
            grabCursor
            speed={600}
            watchSlidesProgress
            resistanceRatio={0.85}
            navigation
            pagination={{
                clickable: true,
                el: ".custom-pagination",
            }}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            breakpoints={{
                768: {},
            }}
            className="project-swiper w-full"
        >
            {projects.map((project) =>(
                <SwiperSlide key={project.id} className="w-full md:!w-[450px] lg:!w-[550px] !h-auto flex">
                    <article className="relative bg-(--container-color) p-6 rounded-[3rem] overflow-hidden px-7 md:p-9 lg:p-10 lg:rounded-[4rem] flex flex-col w-full h-full">
                        <div id="blob-animate-project"></div>

                        <div className="relative z-10 flex items-center justify-between">
                            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">{project.number}</h1>
                            <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal">{project.category}</h3>
                        </div>

                        <div className="relative z-10 my-8 flex-1">
                            <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] mb-4">{project.title}</h1>
                            <p className="font-unbounded text-[1.25rem] md:text-[1.5rem] mb-2">Technologies used</p>
                            <p className="text-shadow-lg text-[1.25rem] md:text-[1.5rem]">{project.tech.join(", ")}</p>
                        </div>

                        <div id="project-image" className="relative z-10 aspect-video overflow-hidden">
                            <img className="w-full h-full object-fill rounded-3xl lg:rounded-4xl" src={project.image} alt={project.title} />
                            <a id="project-button" href={project.link} target="_blank">
                                <svg className="w-5 h-5 md:w-7 md:h-7 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                            </a>
                        </div>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center lg:pt-8"></div>
    </div>
  );
}