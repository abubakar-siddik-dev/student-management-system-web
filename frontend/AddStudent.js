import React, { useState } from "react";
import { addStudent } from "../api";

export default function AddStudent() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(form);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})}/>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input placeholder="Course" onChange={(e) => setForm({...form, course: e.target.value})}/>
      <button>Add</button>
    </form>
  );
}
