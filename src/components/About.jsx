import Container from "../lib/container.jsx";

export default function About ()
{
    return (
        <div className="relative pt-20 xl:min-h-screen">
            <div id="shadow-about" className="w-full h-64.5 absolute -bottom-1 xl:bottom-4 lg:h-150 z-1"></div>
            <Container id="about-container" className="relative pt-16">
                <div className="grid gap-y-12 xl:grid-cols-2 xl:items-center xl:gap-x-20">
                    <div className="md:text-center xl:text-start xl:z-2">
                        <h2 className="mb-6 text-start md:text-center xl:text-start xl:z-2 text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                            <span className="text-(--first-color)">Creativity</span>
                            <br /> Is My Passion
                        </h2>
                        <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] mb-8 xl:mb-12">
                            I'm a <b className="text-(--first-color) font-semi-bold">Junior Software Developer</b> passionate about experimenting with new <b className="text-(--first-color) font-semi-bold">skill and creativity.</b> Driven by learning and curiosity, I'm always looking to explore and learn new development skills.
                        </p>
                        <div id="button-cv" className="cursor-pointer bg-(--body-color) text-(--title-color) py-4 px-8 rounded-[4rem] font-unbounded inline-flex items-center gap-x-2">
                            <a className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] transition duration-400 ease-in-out" href="src/assets/pdf/supawithCV.pdf" download target="_blank">Resume</a>
                            <span><svg className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal transition duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg></span>
                        </div>
                    </div>
                    <div className="relative justify-self-center xl:-order-1">
                        <div id="blob-animate-about" className="top-5 -left-8"></div>
                        <div id="blob-animate-about" className="-right-8 bottom-10 md:bottom-18 lg:-right-18 lg:bottom-16 xl:right-6"></div>
                        <div className="flex justify-center mt-12 xl:pr-24">
                            <img className="w-60 md:w-80 lg:w-110 xl:w-120 self-center" src="profile.PNG" alt="profile picture" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}