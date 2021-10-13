import React from "react";
import axios from "axios";
import "../../dist/styles.css";

class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealType: this.props.mealType,
      foodList: [],
      recipes: []
    };
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    axios.get('/meals')
      .then((response) => {
        this.setState({
          foodList: response.data
        });
        this.formatData();
        // this.test();
      })
      .catch((err) => {
        console.log("Error with rendering page:", err);
      });
  }

  formatData = () => {
    let foodList = this.state.foodList;
    let recipeName = this.props.singleRecipe;
    let names = foodList.map((singleFood) => {
      return (
        {
          name: singleFood.name,
          ingredients: singleFood.ingredients,
          steps: singleFood.steps
        }
        )
      })
      for (let i = 0; i < names.length; i++) {
        if(names[i].name === recipeName) {
          this.setState({
            recipes: this.state.recipes.concat(names[i])
          });
        }
      }
  }

  render() {
    // console.log('recipes', this.state.recipes)
    return (
      <div id="single-recipe-item">
        <div className="single-recipe-item-name">
          {this.props.singleRecipe}
        </div>
        <div className="single-recipe-item-imageURL">
          <div id="single-recipe-image">
            {/* {this.props.singleRecipe.steps.map((step) => {
              return (
                step
              )
            })} */}
            {/* {this.props.singleRecipe.} */}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
