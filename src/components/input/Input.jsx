import styles from './Input.module.css';

console.log(styles);

export default function Input({ label, onChange, defaultValue }) {

  return (
    <div className={styles['input-container']}>
      <label>{label}</label>
      <input type="number" value={defaultValue} required onChange={(event) => onChange(label, event.target.value)} />
    </div>
  )
}