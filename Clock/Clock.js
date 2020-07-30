import React, { useState, useEffect } from 'react';

export default function Clock() {
  
  const initialTime = new Date();
  const s_ini = initialTime.getSeconds();
  const m_ini = initialTime.getMinutes();
  const h_ini = initialTime.getHours();

  const [seconds, setSeconds] = useState(s_ini);
  const [minutes, setMinutes] = useState(m_ini);
  const [hours, setHours] = useState(h_ini);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateTime = async () => {
    await sleep(1000);
    const currentTime = new Date();
    const s = currentTime.getSeconds();
    const m = currentTime.getMinutes();
    const h = currentTime.getHours();
    
    setSeconds(s);
    setMinutes(m);
    setHours(h);
  };

  useEffect(() => {
    updateTime();
  });

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
