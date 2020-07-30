import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const currentTime = new Date();
  const s = currentTime.getSeconds();
  const m = currentTime.getMinutes();
  const h = currentTime.getHours();

  const [seconds, setSeconds] = useState(s);
  const [minutes, setMinutes] = useState(m);
  const [hours, setHours] = useState(h);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateSeconds = async () => {
    await sleep(1000);
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    updateSeconds();
  });

  seconds === 60 && setSeconds(0);
  seconds === 60 && setMinutes(minutes + 1);
  minutes === 60 && setHours(hours + 1);
  hours === 25 && setHours(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {hours}:{minutes}:{seconds}
        </h1>
      </header>
    </div>
  );
}

export default App;
