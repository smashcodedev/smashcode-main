"use client";

import React, { useState } from "react";

const BudgetSlider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="px- w-full py-5">
      <div className="mx-auto max-w-xl">
        <label htmlFor="budget" className="text-2xl text-primary-green">
          <span className="text-white">Your Estimated budget:</span>{" "}
          <span className="font-old text-primary-gren">${value}</span>
        </label>

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
