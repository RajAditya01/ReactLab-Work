// import React from "react";

// function Detail() {
//     const name="Aditya";
// const age=20;
//     return (
//         <>
//             <h1>My Name is {name} </h1>
//             <h2>I Am {age} Year Old</h2>
//         </>
//     );
// }

// export default Detail;


// 2
import React, { useState } from "react";
import "./Detail.css"; // Import the CSS file

function Detail() {
    const [name, setName] = useState(""); // Initialize name state with an empty string
    const [age, setAge] = useState("");   // Initialize age state with an empty string

    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="result">
                <h1>My Name is {name}</h1>
                <h2>I Am {age} Year Old</h2>
            </div>
        </>
    );
}

export default Detail;
