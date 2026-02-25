export default function ToggleButton ({ children, onClick })
{
    return (
        <button onClick={onClick} className="">
            {children}
        </button>
    );
}