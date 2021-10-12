import React from "react";
import "../../dist/styles.css";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFoodTypes: this.props.mealType,
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false,
      foodList: [],
    };
    this.handleMealType = this.handleMealType.bind(this);
  }

  handleMealType = () => {
    if (this.state.allFoodTypes === "breakfast") {
      this.setState({
        isBreakfast: true,
      });
    }
    if (this.state.allFoodTypes === "lunch") {
      this.setState({
        isLunch: true,
      });
    }
    if (this.state.allFoodTypes === "dinner") {
      this.setState({
        isDinner: true,
      });
    }
    if (this.state.allFoodTypes === "dessert") {
      this.setState({
        isDessert: true,
      });
    }
  };

  render() {
    let singleFood = this.props.singleFood;
    this.handleMealType();
    return (
      <div id="single-food-item">
        <div className="single-food-item-name">
          Name:
          {/* {this.state.isBreakfast && ( */}
            <div id="breakfast-food-item">{singleFood.name}</div>
          {/* )} */}
        </div>
        <div className="single-food-item-imageURL">
          Image:
          {/* {this.state.isBreakfast && ( */}
          <div id="breakfast-food-item">
            <img src={singleFood.imageURL} className="image-url" />
          </div>
          {/* )} */}
        </div>
        <button className="submit-btn" type="submit">
          Select!
        </button>
      </div>
    );
  }
}

export default SingleFood;
