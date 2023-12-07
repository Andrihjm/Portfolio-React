function Button({ children, className }) {
    return (
        <button className={`px-9 py-2 text-base rounded-full ${className}`}>
            {children}
        </button>
    );
}

export default Button;