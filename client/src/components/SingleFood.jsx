import React from "react";
import "../../dist/styles.css";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: this.props.mealType,
      isBreakfast: false,
      isLunch: false,
      isDinner: false,
      isDessert: false
    };
  }

  render() {
    return (
      <div id="single-food-item">
        <div className="single-food-item-name">
          Name:
            <div id="breakfast-food-item">{this.props.singleFood.name}</div>
        </div>
        <div className="single-food-item-imageURL">
          Image:
          <div id="breakfast-food-item">
            <img src={this.props.singleFood.imageURL} className="image-url" />
          </div>
        </div>
        <form id="breakfast-food-select-btn" onClick={this.props.handleCurrentFood}>
          <button className="submit-btn" type="submit" value={this.props.singleFood}>
            Select!
          </button>
        </form>
      </div>
    );
  }
}

export default SingleFood;
