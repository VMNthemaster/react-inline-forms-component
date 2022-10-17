const EmailInput = (
  className,
  name,
  value,
  placeholder,
  onChange,
  disabled = false
) => {
  const val = (
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
  return val
}

export { EmailInput }
