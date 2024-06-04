import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Table({ data }) {

  const result = calculateInvestmentResults(data);
  const initialInvestment =
    result[0].valueEndOfYear -
    result[0].interest -
    result[0].annualInvestment;

  console.log(result)

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          result.map((row) => {

            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment *
              row.year -
              initialInvestment;

            const totalAmount = row.valueEndOfYear - totalInterest;  
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmount)}</td>
              </tr>
            )

          })
        }
      </tbody>
    </table>
  )
}