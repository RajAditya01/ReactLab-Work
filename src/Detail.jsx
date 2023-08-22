// import React from "react";

// function StudentDetails() {
//     const name = "Aditya Raj";
//     const rollNo = "11212714";
//     const branch = "Computer Science";
//     const age = 20;

//     return (
//         <>
//             <h1>Student Details</h1>
//             <p>Name: {name}</p>
//             <p>Roll Number: {rollNo}</p>
//             <p>Branch: {branch}</p>
//             <p>Age: {age}</p>
//         </>
//     );
// }

// export default StudentDetails;


import React from "react";
import "./Detail.css"; // Import the CSS file

function StudentDetails() {
  const name = "Aditya Raj";
  const rollNo = "11212714";
  const branch = "Computer Science";
  const age = 20;

  return (
    <div className="student-details-container"> {/* Apply CSS class */}
      <h1 className="student-name">Student Details</h1> {/* Apply CSS class */}
      <p className="detail-label">Name:</p>
      <p className="detail-value">{name}</p>
      <p className="detail-label">Roll Number:</p>
      <p className="detail-value">{rollNo}</p>
      <p className="detail-label">Branch:</p>
      <p className="detail-value">{branch}</p>
      <p className="detail-label">Age:</p>
      <p className="detail-value">{age}</p>
    </div>
  );
}

export default StudentDetails;

