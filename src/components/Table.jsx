import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Table({ data }) {

  const result = calculateInvestmentResults(data);

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
          result.map((row, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{formatter.format(row.annualInvestment)}</td>
                <td>{formatter.format(row.year)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
              </tr>
            )

          })
        }
      </tbody>
    </table>
  )
}