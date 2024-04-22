import { useState } from 'react'

function Recipe({recipe}) {
  const [like, setLike] = useState(0);
  
 
  const instructionList = recipe.instructions;

//  for (i=0; i<instructionList.length; i++) {
//   if (instructionList[i].value == ".") {
    
//   }
//  }
 

 
  return (
   <div className="recipeCard">
    <h3>{recipe.recipeName}</h3>
    <img id="recipeImage" src= {recipe.imageURL} alt="user image"/>
    <h3>Ingredients</h3>
    <ul>{recipe.ingredients}</ul>
    <h3>Instructions</h3>
    <ol>{recipe.instructions}</ol>
    <hr/>
    <div class = "likeSection">
    <button id="likeButton" type="click" onClick={() => setLike((like) => like+1)}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/love-circled.png" alt="love-circled"/></button>
    <p>{like} like(s)</p>
    </div>
   

   </div>
  )
}

export default Recipe