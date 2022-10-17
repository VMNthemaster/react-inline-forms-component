const ColorInput = (
  className,
  name,
  value,
  onChange,
  label,
  disabled = false
) => {
    const val = (
        <div className='div-class'>
            <label htmlFor={`${name}`}>{label}</label>
            <input type="color" className={`${className}`} name={`${name}`} id={`${name}`} value={`${value}`} onChange={onChange} disabled={disabled} />

        </div>
    )
    return val
}

export {ColorInput}
