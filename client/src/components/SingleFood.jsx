import React from 'react';

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false
    }
    this.handleMealType = this.handleMealType.bind(this);
  }

  handleMealType = () => {
    if (mealType === 'breakfast') {
      this.setState({
        isBreakfast: true
      });
    }
    if (mealType === 'lunch') {
      this.setState({
        isLunch: true
      });
    }
    if (mealType === 'dinner') {
      this.setState({
        isDinner: true
      });
    }
    if (mealType === 'dessert') {
      this.setState({
        isDessert: true
      });
    }
  }

  render() {
    let singleFood = this.props.singleFood;
    return (
      <div id="single-food-item">
        {singleFood}
      </div>);
  }
}

export default SingleFood;