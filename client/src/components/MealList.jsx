import React, { useState, useEffect } from 'react';
import SingleFood from './SingleFood.jsx';
import mealData from '../mealData.json';
import '../../dist/styles.css';
import RecipeList from './RecipeList.jsx';

const MealList = ({ mealId, mealType, foodsList, didMount, handleCurrentFood, handleRecipeSubmit }) => {
  // const mealId = useState(this.props.mealId);
  // const mealType = useState(this.props.mealType);
  const [isBreakfast, setBreakfast] = useState(false);
  const [isLunch, setLunch] = useState(false);
  const [isDinner, setDinner] = useState(false);
  const [isDessert, setDessert] = useState(false);
  // const [selectedFoods, setSelectedFoods] = useState(this.props.foodsList);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [keyIndex, setKeyIndex] = useState(0);
  const [currentFoodItem, setCurrentFoodItem] = useState('');
  // const didMount = useState(this.props.didMount);

  // Implement useEffect with this as helper function? Can I implement useRef here?

  // if (this.props.mealType.toLowerCase() === 'breakfast') {
  //   for (let i = 0; i < selectedFoods.length; i++) {
  //     if (this.state.didMount && selectedFoods[i].mealType === 'breakfast') {
  //       breakfastList.push(selectedFoods[i]);
  //       this.breakfastFoods(breakfastList);
  //     }
  //   }
  // }

  const getKey = () => {
    setKeyIndex(keyIndex + 1);
  }

  const breakfastFoods = (foodList) => {
    // Implement useEffect here instead of using setState?
    setBreakfast(true);
    setFilteredFoods(foodList);
    // this.setState({
    //   isBreakfast: true,
    //   filteredFoods: foodList
    // });
  }

  const lunchFoods = (foodList) => {
    this.setState({
      isLunch: true,
      filteredFoods: foodList
    });
  }

  const dinnerFoods = (dinnerList) => {
    this.setState({
      isDinner: true,
      filteredFoods: dinnerList
    });
  }

  const dessertFoods = (foodList) => {
    this.setState({
      isDessert: true,
      filteredFoods: foodList
    });
  }

  return (
    <div id="food-list-container">
      <h2 className="col-headers">Food List</h2>
      {filteredFoods.map((singleFood) => {
        return (
          <SingleFood
            key={getKey()}
            mealType={mealType}
            singleFood={singleFood}
            handleCurrentFood={this.props.handleCurrentFood}
            handleRecipeSubmit={this.props.handleRecipeSubmit}
          />
        )
      })}
    </div>
  );
}

class MealList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealId: this.props.mealId,
      mealType: this.props.mealType,
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false,
      selectedFoods: this.props.foodsList,
      filteredFoods: [],
      keyIndex: 0,
      currentFoodItem: '',
      didMount: this.props.didMount
    }
    this.getKey = this.getKey.bind(this);
    this.breakfastFoods = this.breakfastFoods.bind(this);
    this.lunchFoods = this.lunchFoods.bind(this);
    this.dinnerFoods = this.dinnerFoods.bind(this);
    this.dessertFoods = this.dessertFoods.bind(this);
    // this.handleCurrentFoodItem = this.handleCurrentFoodItem.bind(this);
    // this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.mealId !== prevProps.mealId) {
      let selectedFoods = this.state.selectedFoods;
      let breakfastList = [];
      let lunchList = [];
      let dinnerList = [];
      let dessertList = [];
      if (this.props.mealType.toLowerCase() === 'breakfast') {
        for (let i = 0; i < selectedFoods.length; i++) {
          if (this.state.didMount && selectedFoods[i].mealType === 'breakfast') {
            breakfastList.push(selectedFoods[i]);
            this.breakfastFoods(breakfastList);
          }
        }
      }
      if (this.props.mealType.toLowerCase() === 'lunch') {
        for (let i = 0; i < selectedFoods.length; i++) {
          if (this.state.didMount && selectedFoods[i].mealType === 'lunch') {
            lunchList.push(selectedFoods[i]);
            this.lunchFoods(lunchList);
          }
        }
      }
      if (this.props.mealType.toLowerCase() === 'dinner') {
        for (let i = 0; i < selectedFoods.length; i++) {
          if (this.state.didMount && selectedFoods[i].mealType === 'dinner') {
            dinnerList.push(selectedFoods[i]);
            this.dinnerFoods(dinnerList);
          }
        }
      }
      if (this.props.mealType.toLowerCase() === 'dessert') {
        for (let i = 0; i < selectedFoods.length; i++) {
          if (this.state.didMount && selectedFoods[i].mealType === 'dessert') {
            dessertList.push(selectedFoods[i]);
            this.dessertFoods(dessertList);
          }
        }
      }
    }
   }

  getKey() {
    return this.state.keyIndex += 1;
  }

  breakfastFoods(foodList) {
    this.setState({
      isBreakfast: true,
      filteredFoods: foodList
    });
  }

  lunchFoods(foodList) {
    this.setState({
      isLunch: true,
      filteredFoods: foodList
    });
  }

  dinnerFoods(dinnerList) {
    this.setState({
      isDinner: true,
      filteredFoods: dinnerList
    });
  }

  dessertFoods(foodList) {
    this.setState({
      isDessert: true,
      filteredFoods: foodList
    });
  }

  render() {
    return (
      <div id="food-list-container">
        <h2 className="col-headers">Food List</h2>
        {this.state.filteredFoods.map((singleFood) => {
          return (
            <SingleFood
              key={this.getKey()}
              mealType={this.state.mealType}
              singleFood={singleFood}
              handleCurrentFood={this.props.handleCurrentFood}
              handleRecipeSubmit={this.props.handleRecipeSubmit}
            />
          )
        })}
      </div>
    );
  }
}

export default MealList;