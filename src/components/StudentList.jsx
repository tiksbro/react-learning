import {useContext} from "react";
import StudentCard from "./StudentCard";
import useStudents from "../hooks/useStudents";
import { useState, useEffect } from "react";
import { getStudents } from "../api/studentApi";
function StudentList() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getStudents().then((data) => {
            setStudents(data);
        });
    }, []);
  const { filteredStudents,editStudent,deleteStudent } = useStudents(); 
  return (
    <div>
        <h2>Student List</h2>
      {filteredStudents.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          college={student.college}
          editStudent={editStudent}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;