import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentInfo from './StudentData'

function App() {
  const students = [
    { id: 1, name: "Shravani", age: 20, course: "ML" },
    { id: 2, name: "Purva", age: 22, course: "AI" },
    { id: 3, name: "Saniya", age: 21, course: "DS" }
  ]

  const [count, setCount] = useState(0)
  function showMessage() {
    alert("button clicked");
  }
  return (
    <>
    <h1>Student Data</h1>
    <StudentInfo name="Meghana" age={20} course="ML" />
     <button onClick={showMessage}>Click Me</button>
    {students.map((student) => (
        <StudentInfo
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
      
    </>
  )
}

export default App
