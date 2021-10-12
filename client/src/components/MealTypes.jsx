import React, { useEffect, useState } from 'react';

const MealTypes = ({ meal }) => {
  const [mealType, setMealType] = useState('');

  const handleChange = (e) => {
    setMealType(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    meal(mealType)
  }

  return (
    <div id="meal-selection">
      <h2>Meal Choices:</h2>
      <form id="meal-selection-form" onClick={handleClick}>
        <label>
          <span className="pick-your-meal">Pick your meal:</span>
          <select id="meal-selection-button" onChange={handleChange}>
            <option value="none">I'm feeling...</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </label>
        <button
          className="submit-btn"
          type="submit"
        >Yum!
        </button>
      </form>
    </div>
  );
}

export default MealTypes;