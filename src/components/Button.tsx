interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-xl tracking-wide
    transition-all duration-200 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
  `;

  const variants = {
    primary: `
      bg-primary text-white shadow-md
      hover:bg-hover hover:text-white hover-border
      focus-visible:ring-primary
    `,
    secondary: `
      bg-card text-primary border border-primary
      hover:bg-hover hover:text-primary hover-border
      focus-visible:ring-primary
    `,
    outline: `
      border border-border-color text-color
      hover:bg-hover hover-border hover:text-color
      focus-visible:ring-border-color
    `,
  };

  const sizes = {
    sm: `text-sm px-4 py-2`,
    md: `text-base px-6 py-3`,
  };

  const finalClass = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, " ").trim();

  return href ? (
    <a href={href} className={finalClass} role="button">
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}
