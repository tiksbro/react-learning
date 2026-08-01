import { useState } from "react";

function StudentCard(props) {
  const [showProfile, setShowProfile] = useState(false);

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
    </div>
  );
}

export default StudentCard;