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
    <p>{recipe.ingredients}</p>
    <p>{recipe.instructions}</p>
    <div class = "likeSection">
    <p>{like} like(s)</p>
    <button id="likeButton" type="click" onClick={() => setLike((like) => like+1)}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="love-circled"/></button>
    </div>
   

   </div>
  )
}

export default Recipe