import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import RecipeList from './RecipeList';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const addRecipe = (newPost) => {
    setPosts([...posts, newPost]);
  
  }

  return (
    <>  
      <Header />
      <div className="mainContent"> 
         <RecipeList recipes={posts}/>
         <Form addRecipe={addRecipe} /> 
      </div>
    </>
  )
}

export default App
