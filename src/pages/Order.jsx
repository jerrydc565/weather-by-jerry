import React from "react";

function Order() {
  const students = [
    {
      id: 1,
      name: "John Doe",
      course: "React fundametals",
    },
    { id: 2, name: "Jane Smith", course: "Advanced JavaScript" },
    { id: 3, name: "Bob Johnson", course: "CSS Mastery" },
  ]; 
  return (
    <div>
      <h2> Student List </h2>
      <ul>
        {students.map((stud, idx) => (
          <li key={idx} className="student">
            <p>Name: {stud.name}</p>
            <p>Course: {stud.course}</p>
            <p>Student ID: {stud.id}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;
