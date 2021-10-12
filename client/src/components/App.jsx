import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealTypes from './MealTypes.jsx';
import MealList from './MealList.jsx';
import RecipeList from './RecipeList.jsx';


const App = (props) => {
  // const mealState = {
  //   mealType: '',
  //   mealList: [],
  //   recipeList: []
  // };
  const [mealChoice, setMealChoice] = useState('none');
  const [mealList, setMealList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  // console.log(mealState.mealList);

  useEffect(() => {
    console.log('rendering')
  }, [mealChoice])

  return (
    <div id="meal-planner-container">
      <h1 id="meal-planner-title">Plan Your Meals!</h1>
      <MealTypes meal={choice => setMealChoice(choice)} />
      <MealList />
      <RecipeList />
    </div>
  );
}

export default App;