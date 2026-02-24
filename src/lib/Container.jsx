export default function Container ({ children, className = "" })
{
    return (
        <div className={`max-w-400 mx-auto px-6 ${className}`}>
            {children}
        </div>
    );
}