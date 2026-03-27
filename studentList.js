import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../api";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      {students.map((s) => (
        <div key={s.id}>
          <p>{s.name} - {s.email} - {s.course}</p>
          <button onClick={() => deleteStudent(s.id).then(() => window.location.reload())}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
