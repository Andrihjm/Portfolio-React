function Button({ children, className }) {
    return (
        <button className={`px-10 py-3 rounded-full ${className}`}>
            {children}
        </button>
    );
}

export default Button;