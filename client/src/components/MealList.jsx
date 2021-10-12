import React from 'react';
import mealData from '../mealData.json';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false,
      selectedFoods: []
    }
  }


  // for (let i = 0; i < mealData.length; i++) {
  //   if (mealData[i].mealType === 'breakfast') {
  //     setFoodList(mealData[i]);
  //   }
  //   console.log(foodList);
  // }

  render() {
    return (
      <div>
        <h2>Food List</h2>
        {/* {breakfast && (mealData[0].mealType)} */}
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