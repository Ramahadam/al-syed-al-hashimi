function Badage({ className, children }) {
  return (
    <span
      className={`inline-flex items-center rounded-25 px-4 py-2 bg-color-very-light-gray text-[1.4rem] font-medium  ring-1 ring-color-primary/10 ring-inset ${className}`}
    >
      {children}
    </span>
  );
}

export default Badage;
