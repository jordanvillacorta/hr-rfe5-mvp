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

  // componentDidUpdate(prevProps) {
  //   if (this.props.key !== prevProps.key) {
  //     this.setState({
  //       isDessert: true
  //     })
  //   }
  //  }

  render() {
    return (
      <div id="single-food-item">
        <div className="single-food-item-name">
          Name: {this.props.singleFood.name}
        </div>
        <div className="single-food-item-imageURL">
          {/* Image: */}
          <div id="single-food-image">
            <img src={this.props.singleFood.imageURL} className="image-url" />
          </div>
        </div>
        <form id="single-food-select-btn" onClick={this.props.handleCurrentFood}>
          <button className="submit-btn" type="submit" value={this.props.singleFood}>
            Select!
          </button>
        </form>
      </div>
    );
  }
}

export default SingleFood;
