import { Link } from "react-router-dom";

const Button = ({
  to,
  children,
  onClick,
  className,
  size,
  variant,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1 capitalize cursor-pointer transition-colors duration-300 ease-in-out tracking-wider shadow-md font-semibold";

  const themeStyles = {
    primary: "bg-primary text-white hover:bg-primaryHover",
    hipster: "bg-gray-100 text-primary font-bold hover:bg-gray-200",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs rounded-md",
    md: "px-4 py-1 text-sm rounded-lg",
    lg: "px-6 py-2 text-base rounded-xl",
    xl: "px-7 py-2.5 text-lg rounded-2xl",
  };

  const mergedStyles = `${baseStyles} ${variant ? themeStyles[variant] : themeStyles.primary} ${size ? sizeStyles[size] : sizeStyles.md}  ${className || ""}`;

  if (to) {
    return (
      <Link to={to} className={mergedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default Button;
