import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";

const INITIAL_STATE = {
  initialInvestment: 1,
  annualInvestment: 1,
  expectedReturn: 1,
  duration: 1
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

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <Input label={"initial investment"} onChange={onChangeValue} />
          <Input label={"annual investment"} onChange={onChangeValue} />
          <Input label={"expected return"} onChange={onChangeValue} />
          <Input label={"duration"} onChange={onChangeValue} />
        </div>
      </div>
      <section>
        <Table data={values} />
      </section>
    </>

  )
}

export default App
