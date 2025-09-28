import { useState, useRef } from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  ariaLabel,
  className,
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
    const baseClass = "btn";
    const variantClass = variant !== "primary" ? `btn-${variant}` : "";
    const sizeClass = size !== "medium" ? `btn-${size}` : "";
    const rippleClass = "ripple";
    const customClass = className || "";

    return [baseClass, variantClass, sizeClass, rippleClass, customClass]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={getButtonClasses()}
      disabled={disabled}
    >
      {ripple && (
        <span
          className="ripple-effect"
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
