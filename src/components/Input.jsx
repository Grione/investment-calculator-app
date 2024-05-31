import { useState } from "react"

export default function Input({ label, onChange }) {
  const [value, setValue] = useState(1);

  function handlerChange(event) {
    setValue(event.target.value);
    onChange(label, event.target.value);
  }

  return (
    <div className="input-container">
      <label>{label}</label>
      <input type="number" min={0} value={value} onChange={handlerChange} />
    </div>
  )
}