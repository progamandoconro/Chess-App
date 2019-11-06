import React from 'react'
import logo from './assets/cactus.png'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Admin Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Nombre..."
							value={null}
							onChange={null}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Clave..."
							value={null}
							onChange={null}
							name="password"
						/>
					</div>
        <a
          className="App-link"
          href="https://estudiocactus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web de Estudio Cactus 
        </a>
      </header>
    </div>
  );
}

export default App;
