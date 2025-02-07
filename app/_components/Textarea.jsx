function Textarea({ id, placeholder, labelText, isRequired }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-black">
        <span> {labelText}</span>
        <span>{isRequired && "*"}</span>
      </label>

      <textarea
        id={id}
        placeholder={placeholder}
        className="h-[190px] w-full resize-none rounded-[14px] border border-black px-4 py-2 tablet:h-[220px]"
      ></textarea>
    </div>
  );
}

export default Textarea;
