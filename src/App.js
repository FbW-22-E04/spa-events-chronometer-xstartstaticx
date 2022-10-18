import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="App">
      <div className="container">
        <h1>React Chrono.</h1>
        <div className="numbers">
          <span>{("0" + Math.floor((count / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((count / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((count / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>START</button>
          <button onClick={() => setRunning(false)}>STOP</button>
          <button onClick={() => setCount(0)}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
