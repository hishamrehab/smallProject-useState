import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I Feel like going out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
