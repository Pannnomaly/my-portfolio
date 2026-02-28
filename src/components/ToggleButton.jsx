export default function ToggleButton ({ children, onClick, active })
{
    return (
        <button onClick={onClick} className={`${active ? "text-(--first-color)" : "text-(--text-color)"} hover:text-(--first-color) flex items-center gap-x-1 font-unbounded cursor-pointer transition duration-400 ease-in-out`}>
            <div className="text-[1.25rem] md:text-[1.5rem]">
                {children}
            </div>
        </button>
    );
}