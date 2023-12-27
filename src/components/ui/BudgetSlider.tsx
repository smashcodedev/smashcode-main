"use client";

import React, { useState } from "react";

const BudgetSlider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="w-full px-5 py-5">
      <div className="mx-auto max-w-xl">
        <label htmlFor="budget" className="text-2xl text-primary-green">
          Set your budget:
        </label>
        <output className="mt-2 block text-2xl font-bold text-primary-green">
          ${value}
        </output>
        <input
          type="range"
          min="50"
          max="10000"
          value={value}
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
