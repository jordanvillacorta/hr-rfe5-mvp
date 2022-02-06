import React from "react";
import axios from "axios";
import "../../dist/styles.css";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: this.props.mealType,
    };
  }

  render() {
    return (
      <div id="single-food-item">
        <div className="single-food-item-name">
          {this.props.singleFood.name}
        </div>
        <div className="single-food-item-imageURL">
          <div id="single-food-image">
            <img src={this.props.singleFood.imageURL} className="image-url" />
          </div>
        </div>
        <form
          id="single-food-select-btn"
          onClick={this.props.handleCurrentFood}
        >
          <button
            className="submit-btn"
            type="submit"
            value={this.props.singleFood.name}
          >
            Select!
          </button>
        </form>
      </div>
    );
  }
}

export default SingleFood;
