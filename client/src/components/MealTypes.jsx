import React, { useEffect, useState } from 'react';

const MealTypes = (props) => {

  return (
    <div id="meal-selection">
      <form id="meal-selection-form">
        <label>
          <span className="pick-your-meal">Pick your meal:</span>
          <select>
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