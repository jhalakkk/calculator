import React, { useState } from 'react';

function Calculator() {  
  const [display, setDisplay] = useState('');

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const handleClick = (value) => {
    const lastChar = display.slice(-1);

    
    if (isOperator(lastChar) && isOperator(value)) {
      return;
    }

    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-400 p-4 rounded-lg mb-4">
        <input
          type="text"
          className="w-full bg-gray-100 border border-gray-300 p-2 rounded text-xl text-center"
          value={display}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[7, 8, 9, '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            {value}
          </button>
        ))}
        {[1, 2, 3, '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            {value}
          </button>
        ))}
        {[0, '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={value === '=' ? calculateResult : () => handleClick(value)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            {value}
          </button>
        ))}
        <button
          onClick={clearDisplay}
          className="bg-red-400 hover:bg-red-600 text-white font-bold py-3 px-6 rounded col-span-4"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;