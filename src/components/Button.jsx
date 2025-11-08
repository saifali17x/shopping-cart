import { useState, useRef } from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  ariaLabel,
  className = "",
  variant = "primary", // primary, secondary, accent, outline
  size = "medium", // small, medium, large
  disabled = false,
}) {
  const [ripple, setRipple] = useState(null);
  const buttonRef = useRef(null);

  const createRipple = (event) => {
    if (disabled) return;

    const button = buttonRef.current;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const rect = button.getBoundingClientRect();

    const rippleEffect = {
      width: diameter,
      height: diameter,
      left: event.clientX - rect.left - diameter / 2,
      top: event.clientY - rect.top - diameter / 2,
    };

    setRipple(rippleEffect);

    setTimeout(() => {
      setRipple(null);
    }, 600);
  };

  const handleClick = (event) => {
    createRipple(event);
    onClick && onClick(event);
  };

  const getButtonClasses = () => {
    let baseClasses =
      "relative overflow-hidden font-semibold cursor-pointer transition-all duration-200 inline-flex items-center gap-2 rounded-lg border-none no-underline";

    // Size variants
    const sizeClasses = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg",
    };

    return `${baseClasses} ${sizeClasses[size]} ${className}`;
  };

  const getButtonStyle = () => {
    const baseStyle = {
      boxShadow: "0 2px 8px rgba(62, 47, 47, 0.1)",
    };

    // Color variants
    const variantStyles = {
      primary: {
        backgroundColor: "var(--coral)",
        color: "white",
      },
      secondary: {
        backgroundColor: "var(--sunny)",
        color: "var(--chocolate)",
      },
      accent: {
        backgroundColor: "var(--tangerine)",
        color: "white",
      },
      outline: {
        backgroundColor: "transparent",
        color: "var(--coral)",
        border: "2px solid var(--coral)",
      },
    };

    return { ...baseStyle, ...variantStyles[variant] };
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={getButtonClasses()}
      style={getButtonStyle()}
      disabled={disabled}
    >
      {ripple && (
        <span
          className="absolute rounded-full bg-white bg-opacity-30 pointer-events-none animate-ping"
          style={{
            left: ripple.left,
            top: ripple.top,
            width: ripple.width,
            height: ripple.height,
          }}
        />
      )}
      {children}
    </button>
  );
}
