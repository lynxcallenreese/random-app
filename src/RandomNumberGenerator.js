import React, { useState } from 'react';
function RandomNumberGenerator() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setRandomNumber(randomNumber);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <label>
        Min Value:
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Max Value:
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </label>
      <br />
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <br />
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
