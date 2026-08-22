import { useContext } from "react";
import useStudents from "../hooks/useStudents";
function StudentForm() {
  const {
    name,
    setName,
    age,
    setAge,
    course,
    setCourse,
    college,
    setCollege,
    editingId,
    addStudent,
    updateStudent,
    error,
    loading,
    success,
  } = useStudents();

  return (
    <div className="form">
      <h2>Student Form</h2>

      {success && <p className="success">{success}</p>}

      {error && <p className="error">{error}</p>}

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

      <button
        onClick={editingId ? updateStudent : addStudent}
        disabled={loading}
      >
        {editingId ? "Update Student" : "Add Student"} {loading && "loading..."}
      </button>
    </div>
  );
}

export default StudentForm;