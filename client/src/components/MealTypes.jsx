import React, { useState, useEffect } from "react";
import '../../dist/styles.css';

const MealTypes = ({ mealType, handleChange, handleSubmit }) => {
  const onChangeHandle = () => {
    handleChange();
  }

  const onSubmitHandle = () => {
    handleSubmit();
  }

  return (
    <div id="meal-selection">
      <h2 className="col-headers">Meal Choices:</h2>
      <form id="meal-selection-form" onSubmit={onSubmitHandle}>
        <label>
          <span className="pick-your-meal">Pick your meal: </span>
          <select
            id="meal-selection-button"
            value={mealType}
            onChange={onChangeHandle}
          >
            <option className="select-option" value="none">I'm feeling...</option>
            <option className="select-option" value="Breakfast">Breakfast</option>
            <option className="select-option" value="Lunch">Lunch</option>
            <option className="select-option" value="Dinner">Dinner</option>
            <option className="select-option" value="Dessert">Dessert</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MealTypes;
