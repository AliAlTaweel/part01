import Total from "./Total"
import Header from "./Header"
import Content from "./Content"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>

      <Header name = {part1}/>
      <Content ex = {exercises1}/>
      <Header name = {part2}/>
      <Content ex = {exercises2}/>
      <Header name = {part3}/>
      <Content ex = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App