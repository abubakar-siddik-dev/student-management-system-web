const API = "http://127.0.0.1:8000";

export const getStudents = () => fetch(${API}/students/).then(res => res.json());

export const addStudent = (data) =>
  fetch(${API}/students/, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const deleteStudent = (id) =>
  fetch(${API}/students/${id}, { method: "DELETE" });
