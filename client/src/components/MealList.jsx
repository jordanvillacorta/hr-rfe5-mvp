import React, { useEffect, useState } from 'react';
import mealData from '../mealData.json';

const MealList = ({ meal }) => {
  const [breakfast, setBreakfast] = useState(false);
  const [foodList, setFoodList] = useState([]);

  for (let i = 0; i < mealData.length; i++) {
    if (mealData[i].mealType === 'breakfast') {
      // setBreakfast(true);
    }
  }

  return (
    <div>
      <h2>Food List</h2>
      {/* {breakfast && (mealData[0].mealType)} */}
      <button
        className="submit-btn"
        type="submit"
      >Select!
      </button>
    </div>
  );
}

export default MealList;