import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealTypes from './MealTypes.jsx';

const App = (props) => {
  const mealState = {
    mealType: '',
    mealList: []
  };
  // const [mealType, setMealType] = useState('');
  // const [mealList, setMealList] = useState([]);

  console.log(mealState.mealList);



  return (
    <div id="meal-planner-container">
      <h1>Plan Your Meals!</h1>
      <MealTypes />
    </div>
  );
}

export default App;