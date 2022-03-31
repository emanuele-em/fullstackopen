const Header = (props) =>{
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (pros) =>{
  return(
    <>
      <p>
        {pros.part} {pros.ex}
      </p>
    </>
  )
}

const Total = (props) =>{
  let total = 0;
  (props.ex).forEach(element => {
    total += element;
  });

  return(
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part = {part1} ex={exercises1} />
      <Content part = {part2} ex={exercises2} />
      <Content part = {part3} ex={exercises3} />
      <Total ex = {[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App