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
      selectedFoods: [],
      filteredFoods: [],
      keyIndex: 0,
      currentFoodItem: '',
      recipeList: [],
    }
    this.getKey = this.getKey.bind(this);
    this.test = this.test.bind(this);
    this.handleCurrentFoodItem = this.handleCurrentFoodItem.bind(this);
  }

  componentDidMount() {
    axios.get('/meals')
      .then((response) => {
        this.setState({
          selectedFoods: response.data
        })
        this.test();
      })
      .catch(err => {
        console.log('Error with rendering page:', err);
      })
  }

  test() {
    let breakfastList = [];
    let selectedFoods = this.state.selectedFoods;
    for (let i = 0; i < selectedFoods.length; i++) {
      if (selectedFoods[i].mealType === 'breakfast') {
        breakfastList.push(selectedFoods[i]);
      }
      console.log('list', breakfastList);
      this.setState({
        isBreakfast: true,
        filteredFoods: breakfastList
      });
    }
  }

  getKey() {
    return this.state.keyIndex += 1;
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
        {/* {this.state.selectedFoods.map((singleFood) => {
          return (
            <SingleFood
              key={this.getKey()}
              mealType={this.state.mealType}
              singleFood={singleFood}
              handleCurrentFood={this.handleCurrentFoodItem}
            />
          )
        })} */}
      </div>
    );
  }
}

export default MealList;