import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentSearch from "./components/StudentSearch";

function App() {
  return (
    <div className="app">

      <h1>Student Management App</h1>

      <StudentForm />

      <StudentList />

    </div>
  );
}

export default App;