import { useContext } from "react";
import StudentContext from "../context/StudentContext";

function useStudents() {
    return useContext(StudentContext);
}
export default useStudents;