function Input({
  type,
  name,
  labelText,
  id,
  placeholder,
  isRequired,
  className,
}) {
  return (
    <div className="flex flex-col gap-2 text-paragraphSmall">
      <label htmlFor={id}>
        <span> {labelText}</span>
        <span>{isRequired && "*"}</span>
      </label>

      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`h-[5rem] w-full rounded-[14px] border border-black px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 tablet:h-[5.9rem] ${className}`}
      />
    </div>
  );
}

export default Input;
