import React from "react";
import axios from "axios";
import MealTypes from "./MealTypes.jsx";
import MealList from "./MealList.jsx";
import RecipeList from "./RecipeList.jsx";
import "../../dist/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealId: 0,
      mealType: '',
      mealList: [],
      recipeList: [],
      submitted: false,
      selectedFoods: [],
      didMount: false,
    };
    this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
    this.handleMealTypeSubmit = this.handleMealTypeSubmit.bind(this);
    this.getMealId = this.getMealId.bind(this);
  }

  componentDidMount() {
    axios.get("/meals")
      .then((response) => {
        this.setState({
          selectedFoods: response.data,
          didMount: true,
        });
      })
      .catch((err) => {
        console.log("Error with rendering page:", err);
      });
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

  getMealId() {
    return this.state.mealId += 1;
  }

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
      <div id="meal-planner-wrapper">
        <div id="meal-planner-container">
          <div id="meal-planner-types">
            <MealTypes
              mealType={this.state.mealType}
              handleChange={this.handleMealTypeChange}
              handleSubmit={this.handleMealTypeSubmit}
            />
            {(this.state.submitted && this.state.mealType !== '' && this.state.mealType !== 'none') && (
              <div className="meal-planner-choice">
                {this.state.mealType} is a great choice!
              </div>
            )}
          </div>
          {(this.state.didMount) && (
            <div id="meal-planner-meal-list">
              <MealList
                mealId={this.getMealId()}
                didMount={this.state.didMount}
                foodsList={this.state.selectedFoods}
                mealType={this.state.mealType}
              />
            </div>
          )}
          <div id="meal-planner-recipe-list">
            <RecipeList mealList={this.state.mealList} />
          </div>
        </div>
        <div id="save-meal-plan">
          <button className="save-meal-plan-btn" type="submit">
            SAVE MEAL PLAN
          </button>
        </div>
      </div>
    );
  }
}

export default App;
