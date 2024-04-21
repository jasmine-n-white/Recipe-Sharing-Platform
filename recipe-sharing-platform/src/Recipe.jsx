import { useState } from 'react'

function Recipe({recipe}) {
  const [like, setLike] = useState(0);
  
  // const ingredients = recipe.ingredients;
  // for (i = 0; i<ingredients.length; i++) {
  //    if (ingredients[i] == "-") {
  //    document.createElement("\n");
  //    recipe.appendChild("\n");
  // }

  // }
 
  return (
   <div className="recipeCard">
    <h3>{recipe.recipeName}</h3>
    <img id="recipeImage" src= {recipe.imageURL} alt="user image"/>
    <h3>Ingredients</h3>
    <p>{recipe.ingredients}</p>
    <h3>Instructions</h3>
    <p>{recipe.instructions}</p>
    <hr/>
    <div class = "likeSection">
    <button id="likeButton" type="click" onClick={() => setLike((like) => like+1)}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="love-circled"/></button>
    <p>{like} like(s)</p>
    </div>
   

   </div>
  )
}

export default Recipe