function Button({
  variation,
  children,
  onClick,
  type,
  disabled,
  className,
  size,
}) {
  const baseClass = 'rounded-sm px-7 py-3 tablet:px-md tablet:py-sm';
  const variationClass = {
    outline: 'border border-gray-dark text-gray-dark',
    primary: 'bg-color-primary text-white',
    secondary: 'bg-color-secondary text-primary',
    accent: 'bg-color-accent text-gray-dark',
    link: 'bg-transparent text-secondary',
  };

  const variationSize = {
    large: 'px-md py-sm text-[2rem]',
    md: 'px-md py-sm text-[1.8rem]',
    small: 'px-sm py-[1rem] text-[1.4rem]',
  };

  return (
    <button
      className={`${baseClass} ${variationSize[size]} ${variationClass[variation]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
