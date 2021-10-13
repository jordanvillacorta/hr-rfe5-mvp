import React from 'react';
import axios from "axios";
import SingleFood from './SingleFood.jsx';
import mealData from '../mealData.json';
import '../../dist/styles.css';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: this.props.mealType,
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false,
      selectedFoods: this.props.foodsList,
      filteredFoods: [],
      keyIndex: 0,
      currentFoodItem: '',
      recipeList: [],
      didMount: true
    }
    this.getKey = this.getKey.bind(this);
    this.foodSpecificList = this.foodSpecificList.bind(this);
    this.breakfastFoods = this.breakfastFoods.bind(this);
    this.lunchFoods = this.lunchFoods.bind(this);
    this.dinnerFoods = this.dinnerFoods.bind(this);
    this.dessertFoods = this.dessertFoods.bind(this);
    this.handleCurrentFoodItem = this.handleCurrentFoodItem.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/meals')
  //     .then((response) => {
  //       this.setState({
  //         selectedFoods: response.data,
  //         didMount: true
  //       })
  //       this.foodSpecificList();
  //     })
  //     .catch(err => {
  //       console.log('Error with rendering page:', err);
  //     })
  // }

  componentDidUpdate(prevProps) {
    if (this.props.mealType !== prevProps.mealType) {
      let selectedFoods = this.state.selectedFoods;
      let breakfastList = [];
      let lunchList = [];
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
      this.setState({
        currentFoodItem: 'this is working'
      })
      // this.foodSpecificList();
    }
   }

  getKey() {
    return this.state.keyIndex += 1;
  }

  foodSpecificList() {
    let breakfastList = [];
    let lunchList = [];
    let dinnerList = [];
    let dessertList = [];
    let selectedFoods = this.state.selectedFoods;
    for (let i = 0; i < selectedFoods.length; i++) {
      if (this.state.didMount && selectedFoods[i].mealType === 'breakfast') {
        breakfastList.push(selectedFoods[i]);
        this.breakfastFoods(breakfastList);
      } else if (this.state.didMount && selectedFoods[i].mealType === 'lunch') {
        this.setState({
          isLunch: true,
          // filteredFoods: foodList
        });
        // lunchList.push(selectedFoods[i]);
        // this.lunchFoods(lunchList);
      } else if (this.state.didMount && selectedFoods[i].mealType === 'dinner') {
        dinnerList.push(selectedFoods[i]);
        this.dinnerFoods(dinnerList);
      } else if (this.state.didMount && selectedFoods[i].mealType === 'dessert') {
        dessertList.push(selectedFoods[i]);
        this.dessertFoods(dessertList);
      }
    }
  }

  breakfastFoods(foodList) {
    this.setState({
      // isBreakfast: true,
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
    console.log(dinnerList);
    this.setState({
      isDinner: true,
      // filteredFoods: dinnerList
    });
  }

  dessertFoods(foodList) {
    this.setState({
      isDessert: true,
      // filteredFoods: foodList
    });
  }

  handleCurrentFoodItem = (e) => {
    e.preventDefault();
    // console.log(e.target, 'clicked!')
    this.setState({
      currentFoodItem: e.target.value
    })
  }

  render() {
    return (
      <div id="food-list-container">
        <h2>Food List</h2>
        {this.state.filteredFoods.map((singleFood) => {
          return (
            <SingleFood
              key={this.getKey()}
              mealType={this.state.mealType}
              singleFood={singleFood}
              handleCurrentFood={this.handleCurrentFoodItem}
            />
          )
        })}
      </div>
    );
  }
}

export default MealList;