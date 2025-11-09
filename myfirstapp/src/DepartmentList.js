import React from 'react'

function DepartmentList() {

    const department = ["computer science", "information tech","electronics"];

  return (
    <div>
      <h2>department list</h2>
      <ul>
        {department.map((dept, index) => (
            <li key={index}>{dept}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
