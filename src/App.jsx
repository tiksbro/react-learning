import { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Gaurav",
      age: 22,
      course: "BSc CSIT",
      college: "Mechi Multiple Campus",
    },

    {
      id: 2,
      name: "Ram",
      age: 21,
      course: "BCA",
      college: "ABC College",
    }
  ]);
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [course, setCourse] = useState("");
const [college, setCollege] = useState("");
function addStudent() {

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course,
    college,
  };

  setStudents([...students, newStudent]);

  setName("");
  setAge("");
  setCourse("");
  setCollege("");
}

  return (
    <div className="app">

      <h1>Student Management App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          college={student.college}
        />
      ))}

    </div>
  );
}

export default App;