import {useState} from 'react';

function Form() {
  const [formData, setFormData] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: ""});
  const [errors, setErrors] = useState({recipeName: "", ingredients: "", instructions: "", imageURL: ""});
  const handleRecipeName = (event) => {
    const {value} = event.target;
    if (value.length < 2) {
      setErrors({ ...errors, recipeName: "Recipe name is required." });
    } else {
      setErrors({ ...errors, recipeName: "" });
  }
  setFormData({ ...formData, recipeName: value });
}

const handleIngredients = (event) => {
  const {value} = event.target;
  if (value.length < 2) {
    setErrors({ ...errors, ingredients: "Ingredients are required." });
  } else {
    setErrors({ ...errors, ingredients: "" });
}
setFormData({ ...formData, ingredients: value });
}

const handleInstructions = (event) => {
  const {value} = event.target;
  if (value.length < 2) {
    setErrors({ ...errors, instructions: "Instructions are required." });
  } else {
    setErrors({ ...errors, instructions: "" });
}
setFormData({ ...formData, instructions: value });
}

function isURL(str) {
  return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
}

const handleImageURL = (event) => {
  const {value} = event.target;
  if (!isURL(value) || value.length<2) {
    setErrors({ ...errors, imageURL: "A valid URL for the image is required."});
  } else {
    setErrors({ ...errors, imageURL: ""});
  }
  setFormData({ ... formData, imageURL: value});
}

  return (
    <div className="recipeForm">
    <h2>Add a Recipe 🍲😋</h2>
    <form>
        <input id="recipeName" name="recipeName" type="text" placeholder="Recipe Name" value={formData.recipeName} onChange={handleRecipeName} />
        <textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients" value={formData.ingredients} onChange={handleIngredients} />
        <textarea id="instructions" name="instructions" type="text" placeholder="Instructions" value={formData.instructions} onChange={handleInstructions} />
        <input id="imageURL"name="imageURL" type="url" placeholder="Image URL" value={formData.imageURL} onChange={handleImageURL} />
        <section className="errors">
          <ul>
            {Object.values(errors).map((error, i) => (
              <li key = {i}>{error}</li>
            ))}
          </ul>
        </section>
        <button type="submit">Submit!</button>
    </form>
    </div>
  );
}

export default Form