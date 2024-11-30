// src/Calculator.jsx
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Gunakan eval dengan hati-hati!
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => setInput("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg">
        <div className="mb-4 text-right text-white text-3xl">{input || "0"}</div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
          ].map((item) => (
            <button
              key={item}
              onClick={() => item === "=" ? calculateResult() : handleClick(item)}
              className={`py-4 px-6 text-2xl font-semibold rounded-lg ${
                item === "=" ? "bg-blue-500" : "bg-gray-700"
              } hover:bg-opacity-75 text-white`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 p-2 bg-red-500 hover:bg-opacity-75 text-white text-lg font-semibold rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      <small className="text-white absolute bottom-2">CB @hendra_it19 </small>
    </div>
  );
};

export default Calculator;
