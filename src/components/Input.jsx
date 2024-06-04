export default function Input({ label, onChange, defaultValue }) {

  return (
    <div className="input-container">
      <label>{label}</label>
      <input type="number" value={defaultValue} required onChange={(event) => onChange(label, event.target.value)} />
    </div>
  )
}