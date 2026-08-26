import StudentCard from "./StudentCard";
import useStudents from "../hooks/useStudents";

function StudentList() {

  const {
    filteredStudents,
    editStudent,
    deleteStudent,
    loading,
    error
  } = useStudents();

  if (loading) {
    return <h2>Loading students...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (filteredStudents.length === 0) {
    return <h2>No students found.</h2>;
  }

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