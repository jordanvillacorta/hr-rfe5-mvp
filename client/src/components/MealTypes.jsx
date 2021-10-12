import React from "react";

const MealTypes = ({ mealType, handleChange, handleSubmit }) => {
  return (
    <div id="meal-selection">
      <h2>Meal Choices:</h2>
      <form id="meal-selection-form" onSubmit={handleSubmit}>
        <label>
          <span className="pick-your-meal">Pick your meal:</span>
          <select
            id="meal-selection-button"
            value={mealType}
            onChange={handleChange}
          >
            <option value="none">I'm feeling...</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <button className="submit-btn" type="submit">
          Yum!
        </button>
      </form>
    </div>
  );
};

export default MealTypes;
