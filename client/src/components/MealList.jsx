import React from 'react';
import SingleFood from './SingleFood.jsx';
import mealData from '../mealData.json';

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

  handleData = () => {
    for (let i = 0; i < mealData.length; i++) {
      if (mealData[i].mealType === 'breakfast') {
        this.setState({
          isBreakfast: true,
          selectedFoods: mealData[i]
        })
      }
      console.log(this.state.selectedFoods);
    }
  }

  render() {
    return (
      <div>
        <h2>Food List</h2>
        {this.state.selectedFoods.map((singleFood) => {
          return (
            <SingleFood
              key={this.getKey()}
              singleFood={singleFood}
            />
          )
        })}
        <button
          className="submit-btn"
          type="submit"
          >Select!
        </button>
      </div>
    );
  }
}

export default MealList;