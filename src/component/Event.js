import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("good morning React developer Kimaiyo");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
