import React from "react";
import axios from "axios";
import MealTypes from "./MealTypes.jsx";
import MealList from "./MealList.jsx";
import RecipeList from "./RecipeList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: "none",
      mealList: [],
      recipeList: [],
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let newMealType = e.target.value;
    this.setState({
      mealType: newMealType,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  render() {
    return (
      <div id="meal-planner-container">
        <h1 id="meal-planner-title">Plan Your Meals!</h1>
        <MealTypes
          mealType={this.state.mealType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.submitted && (
          <div className="meal-planner-choice">
            You chose {this.state.mealType}!
          </div>
        )}
        {(this.state.submitted && this.state.mealType !== "none") && (
        <div id="meal-planner-meal-list">
          <MealList />
        </div>)}
        <RecipeList />
      </div>
    );
  }
}

export default App;
