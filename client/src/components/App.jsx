import React from "react";
import axios from "axios";
import MealTypes from "./MealTypes.jsx";
import MealList from "./MealList.jsx";
import RecipeList from "./RecipeList.jsx";
import '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: "none",
      mealList: [],
      recipeList: [],
      submitted: false,
    };
    this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
    this.handleMealTypeSubmit = this.handleMealTypeSubmit.bind(this);
  }

  handleMealTypeChange = (e) => {
    let newMealType = e.target.value;
    this.setState({
      mealType: newMealType,
    });
  };

  handleMealTypeSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  // let newFoodItem = {
  //   meal: this.state.mealType,
  //   list: this.state.foodList
  // };
  // axios.post('/meals', newFoodItem)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })

  render() {
    return (
      <div id="meal-planner-container">
        <div id="meal-planner-types">
          <MealTypes
            mealType={this.state.mealType}
            handleChange={this.handleMealTypeChange}
            handleSubmit={this.handleMealTypeSubmit}
          />
          {this.state.submitted && (
            <div className="meal-planner-choice">
              {this.state.mealType} is a great choice!
            </div>
          )}
        </div>
        {(this.state.submitted && this.state.mealType !== "none") && (
        <div id="meal-planner-meal-list">
          <MealList mealType={this.state.mealType} />
        </div>)}
        <div id="meal-planner-recipe-list">
          <RecipeList mealList={this.state.mealList} />
        </div>
      </div>
    );
  }
}

export default App;
