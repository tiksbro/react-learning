export async function getStudents() {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/users" 
    );
    const data = await response.json();
    return data;
}
export async function createStudent(student) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }
  );

  const data = await response.json();

  return data;
}
export async function updateStudentApi(id, student) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }
  );

  const data = await response.json();

  return data;
}
export async function deleteStudentApi(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );

  return response;
}