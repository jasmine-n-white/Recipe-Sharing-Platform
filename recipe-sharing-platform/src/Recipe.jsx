import { useState } from 'react'

function Recipe({recipe}) {
  const [like, setLike] = useState(0);
  const likePost = (event) => {
    let x = like;
    setLike(like+1);
    return like;
  }
  return (
   <div className="recipeCard">
    <h3>{recipe.recipeName}</h3>
    <p>{recipe.ingredients}</p>
    <p>{recipe.instructions}</p>
    <img src= {recipe.imageURL} alt="user image"/>
    <div id = "likeButton">
    <p>{like} like</p>
    <button type="click" onClick="likePost()">Like</button>
    </div>
   

   </div>
  )
}

export default Recipe