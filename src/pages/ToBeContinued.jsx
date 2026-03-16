import CustomCursor from "@/components/CustomCursor.jsx";

export default function Error ()
{
    return (
        <>
            <CustomCursor />
            <div className="min-h-screen flex justify-center items-center font-unbounded">
                <div id="blob-animate-about" className="top-10 left-10"></div>
                <div id="blob-animate-about" className="right-10 bottom-10 md:bottom-18 lg:-right-18 lg:bottom-16 xl:right-20"></div>
                
                <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] text-shadow-lg">To be <span className="text-(--first-color)">continued. . .</span></h1>
            </div>
        </>
    );
}