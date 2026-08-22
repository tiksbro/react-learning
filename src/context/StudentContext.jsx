import { createContext, useState, useEffect } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      return JSON.parse(savedStudents);
    }

    return [
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
      },
    ];
  });
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [course, setCourse] = useState("");
const [college, setCollege] = useState("");
const [editingId, setEditingId] = useState(null);
const [search, setSearch] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState();

const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(search.toLowerCase())
);

function validateForm() {
    if(!name || !age || !course || !college){
        setError("please fill all the fields");
        return false;
    }
    if (age <=0){
        setError("please enter a valid age");
        return false;
    }
    if(age > 100){
        setError("please enter a valid age");
        return false;
    }
    setError("");
    return true;
}
function addStudent() {
  if (!validateForm()) {
    return;
  }
  setLoading(true);

  const newStudent = {
    id: crypto.randomUUID(),
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
  setLoading(false);
  setSuccess("Student added successfully!");
  showMessage("Student added successfully!");
}
function editStudent(student) {
  setEditingId(student.id);
  setName(student.name);
  setAge(student.age);
  setCourse(student.course);
  setCollege(student.college);
}
function updateStudent() {
    if (!validateForm()) {
        return;
    }
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
  showMessage("Student updated successfully!");
}
function deleteStudent(id) {
    const updatedStudents = students.filter(
        (student) => student.id !== id
    );
    setStudents(updatedStudents);
    showMessage("Student deleted successfully!");
}
function showMessage(message) {
    setSuccess(message);
    setTimeout(() => {
        setSuccess("");
    }, 3000);
}

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <StudentContext.Provider value={{ students,
    name,
    setName,
    age,
    setAge,
    course,
    setCourse,
    college,
    setCollege,
    editingId,
    search,
    setSearch,
    addStudent,
    editStudent,
    updateStudent,
    search,
    setSearch,
    deleteStudent,
    error,
    loading,
    success,
    filteredStudents, }}>
      {children}
    </StudentContext.Provider>
  );
}

export { StudentProvider };
export default StudentContext;