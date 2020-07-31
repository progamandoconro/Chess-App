import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialTime = new Date();
  const s_ini = initialTime.getUTCSeconds();
  const m_ini = initialTime.getUTCMinutes();
  const h_ini = initialTime.getUTCHours();

  const [seconds, setSeconds] = useState(s_ini);
  const [minutes, setMinutes] = useState(m_ini);
  const [hours, setHours] = useState(h_ini);

  // const hoursClock = Array.from(Array(23).keys());

  const updateSeconds = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const currentTime = new Date();
    const s = currentTime.getUTCSeconds();
    const m = currentTime.getUTCMinutes();
    const h = currentTime.getUTCHours();
    setSeconds(s);
    setMinutes(m);
    setHours(h);
  };

  useEffect(() => {
    updateSeconds();
  });

  const timeTenerife = () => {
    let tenerifeHours = h_ini + 1;
    h_ini === 23 && (tenerifeHours = 0);

    return tenerifeHours;
  };

  const timeJapan = () => {
    let japanHours = h_ini + 9;

    for (let i = 0; i < 9; i++) {
      h_ini > 14 + i && (japanHours = i);
    }

    return japanHours;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          UTC {hours}:{minutes}:{seconds}
        </h1>
        <h1>
          Tenerife {timeTenerife()}: {minutes}
        </h1>
        <h1>
          Fukuoka {timeJapan()}: {minutes}
        </h1>
      </header>
    </div>
  );
}

export default App;
