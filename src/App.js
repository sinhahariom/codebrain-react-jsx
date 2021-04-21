import React from "react";
import "./style.css";

export default function App() {

  //conditional rendering
  //JSX
  const renderMe = <p>Hey, Render Me</p>;
  const bool = true;

  return (
    <div>
      {renderMe}
      {bool && <p> Hariom Sinha </p>}
    </div>
  );
}
