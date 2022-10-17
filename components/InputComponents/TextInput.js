const TextInput = (
  className,
  name,
  value,
  placeholder,
  onChange,
  disabled=false
) => {
  return (
    <input
      type="text"
      className={`${className}`}
      name={`${name}`}
      value={`${value}`}
      id={`${name}`}
      placeholder={`${placeholder}`}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
export { TextInput }
