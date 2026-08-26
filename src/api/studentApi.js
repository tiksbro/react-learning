export async function getStudents() {
   const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error("Failed to fetch students");
    }
    const data = await response.json();
    return data;
}
export async function createStudent(student) {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(
    `${API_URL}/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create student");
  }

  const data = await response.json();

  return data;
}
export async function updateStudentApi(id, student) {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(
    `${API_URL}/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }
  );
    if (!response.ok) {
        throw new Error("Failed to update student");
    }

  const data = await response.json();

  return data;
}
export async function deleteStudentApi(id) {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(
    `${API_URL}/users/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete student");
  }

  return response;
}