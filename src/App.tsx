import React from "react";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 25, color: "blue" }}>Hello Winter</h1>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <p key={i}>🔻</p>
      ))}
      <h2>Goodbye Winter 🚀🏔🗻🌨🌝 </h2>
    </div>
  );
}

export default App;
