import React, { useState } from 'react';

function App() {
  // State for the text input value
  const [inputValue, setInputValue] = useState('');

  // Handle the input value change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to Your Typing Game</h1>
      <p>Type something below:</p>

      {/* Text input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here"
      />

      {/* Display what the user types */}
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default App;
