import { useState } from "react";

function studentCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <h2>{props.name}</h2>

      {showDetails && (
        <div>
          <p>{props.course}</p>
          
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

export default studentCard;