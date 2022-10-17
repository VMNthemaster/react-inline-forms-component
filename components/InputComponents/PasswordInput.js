const PasswordInput = (
  className,
  name,
  value,
  placeholder,
  onChange,
  disabled = false
) => {
      return [
        <input
          type="password"
          className={`${className}`}
          name={`${name}`}
          value={`${value}`}
          id={`${name}`}
          placeholder={`${placeholder}`}
          onChange={onChange}
          disabled={disabled}
        />
      ]
}

export { PasswordInput }
