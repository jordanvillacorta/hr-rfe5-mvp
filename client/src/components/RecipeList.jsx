import React, { useState, useEffect } from 'react';
import axios from "axios";
import SingleRecipe from "./SingleRecipe.jsx";

const RecipeList = ({ recipeList }) => {
  const [foodList, setFoodList] = useState([]);
  const [formattedRecipes, setFormattedRecipes] = useState([]);
  const [didListMount, setDidListMount] = useState(false);

  useEffect(() => {
    axios.get('/meals')
      .then((response) => {
        setFoodList(response.data);
        setDidListMount(true);
        formatData();
      })
      .catch((err) => {
        console.error("Error with rendering page:", err);
      });
  }, []);

  const formatData = () => {
    // let foodList = this.state.foodList;
    let names = foodList.map((singleFood) => {
      return ({
          name: singleFood.name,
          ingredients: singleFood.ingredients,
          steps: singleFood.steps
        })
      })
      setFormattedRecipes(names);
      // this.setState({
      //   formattedRecipes: names
      // })
  }
}


// class RecipeList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foodList: [],
//       formattedRecipes: [],
//       didMount: false
//     };
//     this.formatData = this.formatData.bind(this);
//     // this.test = this.test.bind(this);
//   }

//   componentDidMount() {
//     axios.get('/meals')
//       .then((response) => {
//         this.setState({
//           foodList: response.data,
//           didMount: true,
//         });
//         this.formatData();
//         // this.test();
//       })
//       .catch((err) => {
//         console.log("Error with rendering page:", err);
//       });
//   }

//   formatData = () => {
//     let foodList = this.state.foodList;
//     let names = foodList.map((singleFood) => {
//       return (
//         {
//           name: singleFood.name,
//           ingredients: singleFood.ingredients,
//           steps: singleFood.steps
//         }
//         )
//       })
//       this.setState({
//         formattedRecipes: names
//       })
//   }

  // test = () => {
  //   let recipeList = this.props.recipeList;
  //   let formattedRecipes = this.state.formattedRecipes;
  //   for (let i = 0; i < recipeList.length; i++) {
  //     console.log('formatted', formattedRecipes[j])
  //     for (let j = 0; j < formattedRecipes.length; j++) {
  //       // if (recipeList[i] === formattedRecipes[j]) {
  //       // }
  //     }
  //   }
  // }

  // render() {
  //   let formattedRecipes = this.state.formattedRecipes;
  //   let recipeList = this.props.recipeList;
  //   // console.log('recipeList', recipeList);
  //   return (
  //     <div id="recipe-list-container">
  //       <h2 className="col-headers">Recipe List</h2>
  //       {recipeList.map((singleRecipe) => {
  //         console.log('singleRecipe', singleRecipe)
  //         return (
  //           <SingleRecipe
  //             singleRecipe={singleRecipe}
  //             // formattedRecipes={formattedRecipes}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // }
// }

export default RecipeList;