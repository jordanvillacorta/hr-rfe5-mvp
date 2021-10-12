import React from 'react';
import SingleFood from './SingleFood.jsx';
import mealData from '../mealData.json';
import '../../dist/styles.css';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false,
      selectedFoods: mealData,
      keyIndex: 0
    }
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.state.keyIndex += 1;
  }

  // handleData = () => {
  //   for (let i = 0; i < mealData.length; i++) {
  //     if (mealData[i].mealType === 'breakfast') {
  //       this.setState({
  //         isBreakfast: true
  //       })
  //     }
  //     console.log(this.state.selectedFoods);
  //   }
  // }

  render() {
    return (
      <div id="food-list-container">
        <h2>Food List</h2>
        {this.state.selectedFoods.map((singleFood) => {
          return (
            <SingleFood
              key={this.getKey()}
              singleFood={singleFood}
            />
          )
        })}
      </div>
    );
  }
}

export default MealList;