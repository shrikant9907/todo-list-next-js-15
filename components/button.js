'use client';

const Button = ({ onClick, children, className, icon }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${className}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
