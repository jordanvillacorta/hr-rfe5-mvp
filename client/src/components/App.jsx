import React, { useState, useEffect } from "react";
import axios from "axios";
import MealTypes from "./MealTypes.jsx";
import MealList from "./MealList.jsx";
import RecipeList from "./RecipeList.jsx";
import "../../dist/styles.css";

const App = () => {
  const [mealId, setMealId] = useState(0);
  const [mealType, setMealType] = useState("");
  const [mealList, setMealList] = useState([]);
  const [currentFoodItem, setCurrentFoodItem] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [submitted, isSubmitted] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const [saveMeal, setSaveMeal] = useState(false);

  useEffect(() => {
    axios
      .get("/meals")
      .then((response) => {
        setSelectedFoods(response.data);
        setDidMount(true);
      })
      .catch((err) => {
        console.error("Error with rendering page:", err);
      });
  }, []);

  const handleMealTypeChange = (e) => {
    let newMealType = e.target.value;
    setMealType(newMealType);
  };

  const handleMealTypeSubmit = (e) => {
    e.preventDefault();
    isSubmitted(true);
  };

  const handleCurrentFoodItem = (e) => {
    e.preventDefault();
    let newFoodItem = e.target.value;
    setCurrentFoodItem([newFoodItem]);
    setRecipeList(recipeList.concat([newFoodItem]));
  };

  const handleSaveMealClick = (e) => {
    e.preventDefault();
    setSaveMeal(true);
  };

  const getMealId = () => {
    setMealId(mealId + 1);
  };

  return (
    <div id="meal-planner-wrapper">
      <div id="meal-planner-container">
        {didMount && (
          <div id="meal-planner-types">
            <MealTypes
              mealType={mealType}
              handleChange={handleMealTypeChange}
              handleSubmit={handleMealTypeSubmit}
            />
            {submitted && mealType !== "" && mealType !== "none" && (
              <div className="meal-planner-choice">
                {mealType} is a great choice!
              </div>
            )}
          </div>
        )}
        {didMount && (
          <div id="meal-planner-meal-list">
            <MealList
              mealId={getMealId}
              didMount={didMount}
              foodsList={selectedFoods}
              mealType={mealType}
              handleCurrentFood={handleCurrentFoodItem}
            />
          </div>
        )}
        {didMount && (
          <div id="meal-planner-recipe-list">
            <RecipeList recipeList={recipeList} />
          </div>
        )}
      </div>
      <div id="save-meal-plan">
        <button
          className="save-meal-plan-btn"
          type="submit"
          onClick={handleSaveMealClick}
        >
          SAVE MEAL PLAN
        </button>
      </div>
      <br></br>
      <div>
        {saveMeal && <div id="saved-meal-plan">You saved your meal plan!</div>}
      </div>
    </div>
  );
};

export default App;
