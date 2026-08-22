import {useContext} from "react";
import StudentCard from "./StudentCard";
import useStudents from "../hooks/useStudents";
function StudentList() {
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