const express = require("express");

const app = express();
app.use(express.json());

const PORT = 5000;

const students = [
  {
    id: 1,
    name: "Gaurav",
    age: 22,
    course: "BSc CSIT",
    college: "Mechi Multiple Campus"
  },
  {
    id: 2,
    name: "Ram",
    age: 21,
    course: "BCA",
    college: "ABC College"
  }
];

app.get("/", (req, res) => {
  res.send("Student Management API is running!");
});

app.get("/api/students", (req, res) => {
  res.json(students);
});
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;

  const student = students.find(
    (student) => student.id === Number(id)
  );

  res.json(student);
});


app.post("/api/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students[studentIndex] = {
    id: id,
    ...req.body
  };

  res.json(students[studentIndex]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});