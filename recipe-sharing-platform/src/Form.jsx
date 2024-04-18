import {useState} from 'react';

function Form() {
  return (
    <div className="recipeForm">
    <h2>Add a Recipe 🍲😋</h2>
    <form>
        <input id="title" name="title" type="text" placeholder="Recipe Name" required/>
        <textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients" required/>
        <textarea id="instructions" name="instructions" type="text" placeholder="Instructions" required/>
        <input id="imageURL"name="imageURL" type="url" placeholder="Image URL" required/>
        <button type="submit">Submit!</button>
    </form>
    </div>
  );
}

export default Form