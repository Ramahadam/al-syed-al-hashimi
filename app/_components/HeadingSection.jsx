function HeadingSection({ className, children }) {
  return (
    <h2
      className={`tracking-tighter font-medium text-h4 md:text-h2  ${className}`}
    >
      {children}
    </h2>
  );
}

export default HeadingSection;
