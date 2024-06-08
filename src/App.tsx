import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterSuccess = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      <div className="header-buttons">
        <button className='button-style' onClick={() => setShowLogin(true)}>Login</button>
        <button className='button-style' onClick={() => setShowLogin(false)}>Register</button>
      </div>
      {showLogin ? <Login /> : <Register onRegisterSuccess={handleRegisterSuccess} />}
    </div>
  );
};

export default App;