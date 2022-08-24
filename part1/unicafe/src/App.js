import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({ good, bad, neutral }) => {
  if (!good && !bad && !neutral) {
    return (
      <div>
        <p>No feedback Given</p>
      </div>
    )
  }
  // const average = (good || bad || neutral) ? (good - bad) / (good + bad + neutral) : 0
  // const positive = (average) ? good * 100 / (good + bad + neutral) : 0
  //I'm sure that ! DIV0
  const average = (good - bad) / (good + bad + neutral)
  const positive = (good * 100) / (good + bad + neutral)

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive + "%"} />
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={addGood} text={"good"} />
      <Button handleClick={addNeutral} text={"neutral"} />
      <Button handleClick={addBad} text={"bad"} />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App