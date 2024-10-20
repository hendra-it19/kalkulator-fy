// src/Calculator.jsx
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    // try {
    //   setInput(eval(input).toString()); // Gunakan eval dengan hati-hati!
    // } catch {
    //   setInput("Error");
    // }
    setInput("Miss You ❤️")
  };

  const clearInput = () => setInput("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md">
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
              className={`p-4 text-xl font-semibold rounded-lg ${
                item === "=" ? "bg-blue-500" : "bg-gray-700"
              } hover:bg-opacity-75 text-white`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 p-4 bg-red-500 hover:bg-opacity-75 text-white text-xl font-semibold rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
