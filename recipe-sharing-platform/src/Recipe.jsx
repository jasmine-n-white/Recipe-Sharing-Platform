import { useState } from 'react'

function Recipe({recipe}) {
  const [like, setLike] = useState(0);
  return (
   <div className="recipeCard">
    <h3>{recipe.recipeName}</h3>
    <p>{recipe.ingredients}</p>
    <p>{recipe.instructions}</p>
    <img src= {recipe.imageURL} alt="user image"/>

   </div>
  )
}

export default Recipe