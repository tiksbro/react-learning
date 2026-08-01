import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="app">
      <h1>Student Management App</h1>

      <StudentCard
        name="Gaurav"
        age={22}
        course="BSc CSIT"
        college="Mechi Multiple Campus"
      />

      <StudentCard
        name="Ram"
        age={21}
        course="BCA"
        college="ABC College"
      />

      <StudentCard
        name="Hari"
        age={23}
        course="BIT"
        college="XYZ College"
      />
    </div>
  );
}

export default App;