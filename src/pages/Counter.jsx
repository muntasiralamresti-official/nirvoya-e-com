// src/pages/Counter.jsx
import React from "react";
import { useSelector } from "react-redux";
import IncrementButton from "../components/UI/IncrementButton";
import DecrementButton from "../components/UI/DecrementButton";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center gap-6">
        
        <h1 className="text-white text-4xl font-bold tracking-wide">
          Counter
        </h1>

        <div className="flex items-center gap-6">
          <DecrementButton />

          <h2 className="text-5xl font-extrabold text-white">
            {count}
          </h2>

          <IncrementButton />
        </div>

      </div>

    </div>
  );
};

export default Counter;