import React from 'react';
import axios from "axios";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: []
    };
  }

  render() {
    return (
      <div>
        <h2>RECIPE LIST HERE</h2>
        {this.state.recipeList}
      </div>
    );
  }
}

export default RecipeList;