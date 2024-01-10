"use client";

import React from "react";

type BudgetSliderProps = {
  budget: number;
  setBudget: (value: number) => void;
};

const BudgetSlider: React.FC<BudgetSliderProps> = ({ budget, setBudget }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  return (
    <div className="px- w-full py-5">
      <div className="mx-auto max-w-xl">
        <label htmlFor="budget" className="text-2xl text-primary-green">
          <span className="text-white text-xl">Your Estimated budget:</span>{" "}
          <span className="font-old text-primary-gren">${budget}</span>
        </label>

        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={budget}
          id="budget"
          name="budget"
          onChange={handleChange}
          className="rounded-ful mt-5 h-2 w-full accent-primary-green"
        />
      </div>
    </div>
  );
};

export default BudgetSlider;
