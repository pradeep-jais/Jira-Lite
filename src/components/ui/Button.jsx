import { Link } from "react-router-dom";

const Button = ({ to, children, onClick, className, size }) => {
  const baseStyles =
    "inline-block capitalize cursor-pointer transition-colors duration-300 ease-in-out";

  const themeStyles = "bg-primary text-white hover:bg-primaryHover";

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs rounded-md",
    md: "px-4 py-1 text-sm rounded-lg",
    lg: "px-6 py-2 text-base rounded-xl",
    xl: "px-7 py-2.5 text-lg rounded-2xl",
  };

  const mergedStyles = `${baseStyles} ${themeStyles} ${size ? sizeStyles[size] : sizeStyles.md}  ${className || ""}`;

  if (to) {
    return (
      <Link to={to} className={mergedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedStyles} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
