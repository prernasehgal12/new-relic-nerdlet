import React, { useState, useEffect } from 'react';

export const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const containerStyle = {
    textAlign: 'center',
    margin: '50px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
  };

  const headingStyle = {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };

  const paragraphStyle = {
    color: '#555',
    fontSize: '16px',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '14px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    setShowMessage(!showMessage);
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    let interval;
    if (showMessage) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [showMessage]);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My App!</h1>
      <p style={paragraphStyle}>
        This is a simple React app. Feel free to customize and add more features!
      </p>
      <div>
        <button style={buttonStyle} onClick={handleButtonClick}>
          Click Me
        </button>
      </div>
      {showMessage && (
        <div>
          <p style={{ color: '#4CAF50', marginTop: '20px' }}>You clicked the button! 🚀</p>
          <p>Button clicked {counter} times.</p>
          <p>Timer: {timer} seconds</p>
        </div>
      )}
    </div>
  );
};

