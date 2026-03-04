import Container from "@/lib/Container.jsx";
import Developer from "./Developer.jsx";
import Design from "./Design.jsx";

export default function Services ()
{
    return (
        <div className="pt-20 xl:min-h-screen lg:pt-36 lg:pb-16">
            <Container>
                <h2 className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                    What I <span className="text-(--first-color)">Offer</span>
                </h2>

                <div className="gap-y-8">
                    <Developer />
                    <Design />
                </div>
            </Container>
        </div>
    );
}