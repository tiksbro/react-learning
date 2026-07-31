import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Card App</h1>

      <StudentCard
        name="Gaurav"
        course="BSc CSIT Student"
        college="Mechi Multiple Campus"
      />

      <StudentCard
        name="Ram"
        course="BCA Student"
        college="TU Campus"
      />
    </div>
  );
}

export default App;