export default function Hero ()
{
    return (
        <div className="pt-20 pb-4">
            <div>shadow</div>
            <div className="grid gap-6">
                <div className="text-(--title-color) font-unbounded font-semibold">
                    <h3 className="text-[1rem]">Hello, I'm</h3>
                    <h1 className="text-[1.5rem]">Supawith<br />Jangtrakul</h1>
                </div>
                <div>
                    <div id="blob-animate"></div>
                    <img src="logo.PNG" alt="image-profile"  />
                </div>
                <div>info</div>
                <div>social</div>
                <a href="">CV</a>
            </div>
        </div>
    );
}