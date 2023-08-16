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


import React, { useState } from "react";

function Detail() {
    const [name, setName] = useState(""); // Initialize name state with an empty string
    const [age, setAge] = useState("");   // Initialize age state with an empty string

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <h1>My Name is {name}</h1>
            <h2>I Am {age} Year Old</h2>
        </>
    );
}

export default Detail;
