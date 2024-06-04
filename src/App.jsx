import { useState } from "react";

import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Table from "./components/table/Table";

const INITIAL_STATE = {
  initialInvestment: 1000,
  annualInvestment: 50,
  expectedReturn: 6,
  duration: 6
}

const LABELS = {
  initialInvestment: 'initial investment',
  annualInvestment: 'annual investment',
  expectedReturn: 'expected return',
  duration: 'duration'
}

function App() {
  const [values, setValues] = useState(INITIAL_STATE);

  function onChangeValue(label, newValue) {
    const key = Object.keys(LABELS).find(key => LABELS[key] === label);

    setValues((prevValues) => {
      return {
        ...prevValues,
        [key]: +newValue
      }
    })
  }

  const valuesIsValid = values.duration >=1; 

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <Input label={LABELS.initialInvestment} defaultValue={values.initialInvestment} onChange={onChangeValue} />
          <Input label={LABELS.annualInvestment} defaultValue={values.annualInvestment} onChange={onChangeValue} />
          <Input label={LABELS.expectedReturn} defaultValue={values.expectedReturn} onChange={onChangeValue} />
          <Input label={LABELS.duration} defaultValue={values.duration} onChange={onChangeValue} />
        </div>
      </div>
      <section>
        {!valuesIsValid && <p className="center">Please enter a duration greater then zero</p>}
        {valuesIsValid &&  <Table data={values} />}
      </section>
    </>

  )
}

export default App
