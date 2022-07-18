export default function FormInput({
  inputType,
  className,
  placeHolder,
  inputId,
  inputName,
  onInputChange,
  onInputBlur,
}) {
  return (
    <>
      <input
        type={inputType}
        className={className}
        placeholder={placeHolder}
        id={inputId}
        name={inputName}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
    </>
  );
}
