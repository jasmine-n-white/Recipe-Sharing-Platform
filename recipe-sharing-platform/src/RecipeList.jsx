import Recipe from './Recipe';

function RecipeList({recipes}) {
  const posts = [];
  for(let i=0; i < recipes.length; i++) {
    const recipe = recipes[i];
    posts.push(<Recipe key={i} recipe={recipe} />);
  }

  let extraText = ""; 
  if (posts == "") {
   extraText = <p>No posts available to view yet. Add a new post!</p>;
  } else {
    extraText = <div className="scrollDown"><img width="100" height="100" src="https://img.icons8.com/dotty/80/FFFFFF/thick-arrow-pointing-down.png" alt="thick-arrow-pointing-down"/><p>Scroll Down to View Posts</p><img width="100" height="100" src="https://img.icons8.com/dotty/80/FFFFFF/thick-arrow-pointing-down.png" alt="thick-arrow-pointing-down"/></div>;
  }
  

  return (
    <>  
    <div className="grid-container">{extraText}{posts}</div>
    </>
  )
}

export default RecipeList