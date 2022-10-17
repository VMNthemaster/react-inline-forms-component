const RadioInput = (name, id, value, label, onChange) => {
   
    return (
        id.map((ID, index) => {
            return (<div key={index}>
               <input type="radio" id={ID} name={`${name}`} value={value[index]} onChange={onChange} ></input>
               <label htmlFor={`${name}`}>{label[index]}</label>
               </div>
        )
        })
    )
}

export {RadioInput}