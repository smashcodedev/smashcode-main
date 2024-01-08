"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
          <span className="text-white">Your Estimated budget:</span>{" "}
          <span className="font-old text-primary-gren">${budget}</span>
        </label>

        <input
          type="range"
          min="50"
          max="10000"
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
