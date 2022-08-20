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
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course ={
    name : 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      {
        course.parts.forEach(part => {
          <Content part = {part.name} ex={part.exercise} />
        })
      }
      <Total ex = {course.parts.exercise} />
    </div>
  )
}

export default App