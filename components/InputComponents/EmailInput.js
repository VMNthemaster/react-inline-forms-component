const EmailInput = (
  className,
  name,
  value,
  placeholder,
  onChange,
  disabled = false
) => {
  return (
    <input
      type="email"
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

export { EmailInput }
