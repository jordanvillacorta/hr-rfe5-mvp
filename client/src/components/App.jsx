import React, { useState, useEffect } from "react";
import axios from "axios";
import MealTypes from "./MealTypes.jsx";
import MealList from "./MealList.jsx";
import RecipeList from "./RecipeList.jsx";
import "../../dist/styles.css";


// class App extends React.Component {
  //   constructor(props) {
    //     super(props);
    //     this.state = {
      //       mealId: 0,
      //       mealType: '',
      //       mealList: [],
      //       currentFoodItem: '',
      //       recipeList: [],
      //       submitted: false,
      //       selectedFoods: [],
      //       didMount: false,
      //       saveMeal: false
      //     };
      //     this.handleMealTypeChange = this.handleMealTypeChange.bind(this);
      //     this.handleMealTypeSubmit = this.handleMealTypeSubmit.bind(this);
      //     this.handleCurrentFoodItem = this.handleCurrentFoodItem.bind(this);
      //     this.handleSaveMealClick = this.handleSaveMealClick.bind(this);
      //     this.getMealId = this.getMealId.bind(this);
      //   }

  const App = () => {
    const [mealId, setMealId] = useState(0);
    const [mealType, setMealType] = useState('');
    const [mealList, setMealList] = useState([]);
    const [currentFoodItem, setCurrentFoodItem] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [submitted, isSubmitted] = useState(false);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [didMount, setDidMount] = useState(false);
    const [saveMeal, setSaveMeal] = useState(false);

    useEffect(() => {
      axios.get('/meals')
        .then((response) => {
          this.setState({
            selectedFoods: response.data,
            didMount: true,
          });
        })
        .catch((err) => {
          console.log("Error with rendering page:", err);
        });
    }, []);


  // componentDidMount() {
  //   axios.get('/meals')
  //     .then((response) => {
  //       this.setState({
  //         selectedFoods: response.data,
  //         didMount: true,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error with rendering page:", err);
  //     });
  // }

  const handleMealTypeChange = (e) => {
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

  handleCurrentFoodItem = (e) => {
    e.preventDefault();
    let newFoodItem = e.target.value;
    this.setState({
      currentFoodItem: [newFoodItem],
      recipeList: this.state.recipeList.concat([newFoodItem])
    })
  }

  handleSaveMealClick = (e) => {
    e.preventDefault();
    this.setState({
      saveMeal: true
    })
  }

  getMealId() {
    return this.state.mealId += 1;
  }

  // render() {
  //   return (
  //     <div id="meal-planner-wrapper">
  //       <div id="meal-planner-container">
  //         <div id="meal-planner-types">
  //           <MealTypes
  //             mealType={this.state.mealType}
  //             handleChange={this.handleMealTypeChange}
  //             handleSubmit={this.handleMealTypeSubmit}
  //           />
  //           {(this.state.submitted && this.state.mealType !== '' && this.state.mealType !== 'none') && (
  //             <div className="meal-planner-choice">
  //               {this.state.mealType} is a great choice!
  //             </div>
  //           )}
  //         </div>
  //         {(this.state.didMount) && (
  //           <div id="meal-planner-meal-list">
  //             <MealList
  //               mealId={this.getMealId()}
  //               didMount={this.state.didMount}
  //               foodsList={this.state.selectedFoods}
  //               mealType={this.state.mealType}
  //               handleCurrentFood={this.handleCurrentFoodItem}
  //               // handleRecipeSubmit={this.handleRecipeSubmit}
  //             />
  //           </div>
  //         )}
  //         {(this.state.didMount) && (
  //         <div id="meal-planner-recipe-list">
  //           <RecipeList recipeList={this.state.recipeList} />
  //         </div>
  //         )}
  //       </div>
  //       <div id="save-meal-plan">
  //         <button className="save-meal-plan-btn" type="submit" onClick={this.handleSaveMealClick} >
  //           SAVE MEAL PLAN
  //         </button>
  //       </div>
  //       <br></br>
  //       <div>
  //         {this.state.saveMeal && (
  //           <div id="saved-meal-plan">
  //             You saved your meal plan!
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
// }
}

export default App;
