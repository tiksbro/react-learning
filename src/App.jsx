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
const [editingId, setEditingId] = useState(null);
const [search, setSearch] = useState("");
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
function editStudent(student){
  setEditingId(student.id);
  setName(student.name);
  setAge(student.age);
  setCourse(student.course);
  setCollege(student.college);
  
}
function updateStudent() {
  const updatedStudents = students.map((student) => {
    if (student.id === editingId) {
      return {
        ...student,
        name,
        age,
        course,
        college,
      };
    }

    return student;
  });

  setStudents(updatedStudents);

  setEditingId(null);

  setName("");
  setAge("");
  setCourse("");
  setCollege("");
}
const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">

      <h1>Student Management App</h1>
      <div className="search-box">
  <input
    type="text"
    placeholder="Search Student..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

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
       <button onClick={editingId ? updateStudent : addStudent}>
  {editingId ? "Update Student" : "Add Student"}
</button>
      </div>

      {filteredStudents.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          college={student.college}
          editStudent={editStudent}
        />
      ))}

    </div>
  );
}

export default App;