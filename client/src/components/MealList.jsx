import React, { useEffect, useState } from 'react';
import mealData from '../mealData.json';

const MealList = (props) => {

  return (
    <div>
      <h2>Food List</h2>
      {mealData[0].ingredients[0].name}
      <button
        className="submit-btn"
        type="submit"
      >Select!
      </button>
    </div>
  );
}

export default MealList;