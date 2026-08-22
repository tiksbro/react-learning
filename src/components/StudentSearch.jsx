import { useContext } from "react";
import useStudents from "../hooks/useStudents";

function StudentSearch() {

  const { search, setSearch } = useStudents();

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default StudentSearch;