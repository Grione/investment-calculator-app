export default function Input({ label, onChange, defaultValue }) {

  return (
    <div className="input-container">
      <label>{label}</label>
      <input type="number" min={0} value={defaultValue} required onChange={(event) => onChange(label, event.target.value)} />
    </div>
  )
}