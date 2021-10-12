import React from 'react';

const MealTypes = ({ mealType, handleChange, handleSubmit}) => {

  return (
    <div id="meal-selection">
      <h2>Meal Choices:</h2>
      <form id="meal-selection-form" onSubmit={handleSubmit}>
        <label>
          <span className="pick-your-meal">Pick your meal:</span>
          <select id="meal-selection-button" value={mealType} onChange={handleChange}>
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