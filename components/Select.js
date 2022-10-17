const Select = (
  selectClassName,
  optionsClassName,
  Name,
  value,
  onChange,
  arr
) => {
  return (
    <select
      className={selectClassName}
      name={Name}
      value={value}
      id={Name}
      onChange={onChange}
    >
      {arr.map((val, index) => {
        return (
          <option key={index} className={optionsClassName} value={val}>
            {val}
          </option>
        )
      })}
    </select>
  )
}

export { Select }
