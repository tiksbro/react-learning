import { getStudents, createStudent, updateStudentApi,deleteStudentApi } from "../api/studentApi";
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
async function addStudent() {
  if (!validateForm()) {
    return;
  }

  try {
    setLoading(true);

    const newStudent = {
      name,
      age,
      course,
      college,
    };

    const savedStudent = await createStudent(newStudent);

    setStudents((previousStudents) => [
      ...previousStudents,
      {
        ...newStudent,
        id: savedStudent.id,
      },
    ]);

    setName("");
    setAge("");
    setCourse("");
    setCollege("");

    showMessage("Student added successfully!");

  } catch (error) {
    console.log("Error adding student:", error);
    setError("Failed to add student");

  } finally {
    setLoading(false);
  }
}
function editStudent(student) {
  setEditingId(student.id);
  setName(student.name);
  setAge(student.age);
  setCourse(student.course);
  setCollege(student.college);
}
async function updateStudent() {
  try {
    setLoading(true);

    const updatedStudent = {
      name,
      age,
      course,
      college,
    };

    await updateStudentApi(editingId, updatedStudent);

    setStudents((previousStudents) =>
      previousStudents.map((student) => {
        if (student.id === editingId) {
          return {
            ...student,
            ...updatedStudent,
          };
        }

        return student;
      })
    );

    setEditingId(null);

    setName("");
    setAge("");
    setCourse("");
    setCollege("");

    showMessage("Student updated successfully!");

  } catch (error) {
    console.log("Error updating student:", error);
    setError("Failed to update student");

  } finally {
    setLoading(false);
  }
}
async function deleteStudent(id) {
  try {
    setLoading(true);

    await deleteStudentApi(id);

    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );

    showMessage("Student deleted successfully!");

  } catch (error) {
    console.log("Error deleting student:", error);
    setError("Failed to delete student");

  } finally {
    setLoading(false);
  }
}
function showMessage(message) {
    setSuccess(message);
    setTimeout(() => {
        setSuccess("");
    }, 3000);
}
async function fetchStudents() {
  try {
    setLoading(true);

   const data = await getStudents();

const formattedStudents = data.map((student) => {
  return {
    id: student.id,
    name: student.name,
    age: 20 + student.id,
    course: "BSc CSIT",
    college: student.company.name,
  };
});

setStudents(formattedStudents);

  } catch (error) {
    console.log("Error fetching students:", error);
    setError("Failed to load students");
  } finally {
    setLoading(false);
  }
}
useEffect(() => {
    fetchStudents();
  }, []);

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