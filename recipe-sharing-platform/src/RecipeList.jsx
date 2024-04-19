import Recipe from './Recipe';

function RecipeList({recipes}) {
  const posts = [];
  for(let i=0; i < recipes.length; i++) {
    const recipe = recipes[i];
    posts.push(<Recipe key={i} recipe={recipe} />);
  }
  return (
    <>
    <div className="grid-container">{posts}</div>
    </>
  )
}

export default RecipeList