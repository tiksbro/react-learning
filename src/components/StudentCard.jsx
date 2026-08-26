import { useState, memo } from "react";
import useStudents from "../hooks/useStudents";

function StudentCard(props) {
  const [showProfile, setShowProfile] = useState(false);

  const { deleteStudent } = useStudents();

  function toggleProfile() {
    setShowProfile(!showProfile);
  }

  return (
    <div className="card">

      <h2>{props.name}</h2>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "View Profile"}
      </button>

      {showProfile && (
        <div className="profile">

          <p>
            <strong>Age:</strong> {props.age}
          </p>

          <p>
            <strong>Course:</strong> {props.course}
          </p>

          <p>
            <strong>College:</strong> {props.college}
          </p>

        </div>
      )}

      <button
        className="edit-btn"
        onClick={() =>
          props.editStudent({
            id: props.id,
            name: props.name,
            age: props.age,
            course: props.course,
            college: props.college,
          })
        }
      >
        Edit
      </button>

      <button
        className="delete-btn"
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
          );

          if (confirmDelete) {
            deleteStudent(props.id);
          }
        }}
      >
        Delete
      </button>

    </div>
  );
}

export default memo(StudentCard);