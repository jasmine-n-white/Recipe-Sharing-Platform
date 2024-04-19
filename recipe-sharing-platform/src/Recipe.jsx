
function Recipe({recipe}) {
  return (
   <div>
    <h3>{recipe.recipeName}</h3>
    <p>{recipe.ingredients}</p>
    <p>{recipe.instructions}</p>
    <img src= {recipe.imageURL} alt="user image"/>

   </div>
  )
}

export default Recipe