const Button = ({
    children,
    className = "",
    ...props
  }) => {
    return (
      <button
        {...props}
        className={`
          px-5 py-3 rounded-2xl
          bg-orange-500
          hover:bg-orange-600
          text-white
          font-medium
          transition-all duration-200
          shadow-sm hover:shadow-lg
          active:scale-[0.98]
          ${className}
        `}
      >
        {children}
      </button>
    )
  }
  
  export default Button